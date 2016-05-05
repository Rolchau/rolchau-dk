/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      watchJekyll: {
        command: 'jekyll build --watch'
      }
    },

    sass: {
      options: {
        sourcemap: true
      },
      dist: {
        files: {
          'build/css/rolchau.css':'scss/rolchau.scss'
        }        
      }
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'build/css/maps/'
        },
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']}),
        ] 
      },
      dist: {
        files: {
          'build/css/rolchau.css':'stylesheet/rolchau.css'
        }
      }
    },

    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass'],
        options: {
          nospawn: true
        },
      }
    },

    concurrent: {
      watches: ['watch', 'shell:buildJekyll'],
      options: {
        logConcurrentOutput: true
      }
    }    
  });

  // Default task.
  grunt.registerTask('default', ['sass', 'postcss']);
};
