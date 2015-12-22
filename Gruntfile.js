/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      buildJekyll: {
        command: 'jekyll build --watch'
      },
      proxyBrowserSync: {
        command: 'browser-sync start --server "build" --files="build/css/*.css, build/**/*.html, build/js/*.js"'
      }
    },
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/maps/'
        },
        processors: [
          require('postcss-import'),
          require('postcss-simple-vars'),
          require('postcss-nested'),
          require('postcss-for-var'),
          require('postcss-modular-scale'),
          require('autoprefixer')({browsers: ['last 2 versions']}),
          require('cssnano')()
        ] 
      },
      dist: {
        files: {
          'build/css/rolchau.css':'stylesheet/rolchau.css'
        }
      }
    },
    uglify: {
      loadcss: {
        files: {
          'build/js/loadcss.js': 'js/loadcss.js'
        }
      }
    },
    watch: {
      css: {
        files: 'stylesheet/**/*.css',
        tasks: ['postcss'],
        options: {
          nospawn: true
        },
      }
    },
    concurrent: {
      watches: ['watch', 'shell:buildJekyll', 'shell:proxyBrowserSync'],
      options: {
        logConcurrentOutput: true
      }
    }    
  });

  // Default task.
  grunt.registerTask('default', ['']);

};
