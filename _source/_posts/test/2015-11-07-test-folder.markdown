---
title:  "Jeg tester foldere"
date:   2015-11-07
categories: test-ting
tags: [woodworking, painting]
permalink: /how-to-find/
---

Nogle gange har man bare brug for følgende: {{page.categories}}

Den her skulle jo så gerne være i sin egen folder?
===

Hvad med tags?  

{% for tag in page.tags %} **TAG**: {{tag}}{% endfor %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corporis, quo officia exercitationem blanditiis? Rerum, unde amet incidunt? Error, eligendi quis ex provident perspiciatis. Aperiam eaque eius ea, quam soluta.
Tester lige lidt mere

Min hjemmeside kan du finde på [rolchau.dk][rolchau-dk], hvor du også kan se hvad jeg laver i min fritid, og se den her [Post omkring noget][some-link].

[rolchau-dk]: http://www.rolchau.dk
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[some-link]: {% post_url 2015-11-07-test-af-link %}
