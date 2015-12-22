---
title:  "Welcome to Jekyll @ rolchau.dk!"
date:   2015-11-07
categories: derp derp2mappe
user: "Tommy"
image:
    - url: path/to/image
      caption: 'A photo from my trip to [the solar farm](http://example.com).'
      alt: 'alt text'
    - url: path/to/another-image
      caption: 'Another photo from my trip.' 
      alt: 'more alt text'
tags: derp
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic, rem quaerat veritatis consequuntur nisi id ut consectetur itaque in non, quidem magni totam tempore, aspernatur eius? Accusantium odit, totam.
<!--more-->


Tester lige lidt mere
---

{% figure_img left 1 caption %}

{% if page.user %}
Der var en user: {{page.user}}
{% endif %}

![My helpful screenshot]({{ site.url }}/img/screenshot.jpg)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam harum aperiam hic eveniet. Nisi explicabo repellendus assumenda molestias natus optio suscipit at inventore saepe, error distinctio aliquam ab, facilis cum!
1. Ting
2. Ting 2
3. Ting 3

### Det her er jo crazy

#### Tosset, ingen bruge H4'er

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code {{page.author}}:

{% highlight javascript %}
function(param) { 
  var ninja = "232";
}
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
