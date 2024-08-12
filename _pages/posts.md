---
layout: default
title: Posts
permalink: /posts/
_unlisted: true
---
<h1>Latest Posts</h1>

<div>
  {% for post in site.posts %}
    <article>   
      <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <div class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</div>
      {% if post.featured_image %}
        <div class="post-featured-image"><img src="/assets/img/posts/featured-images/{{ post.featured_image }}"></div>
      {% endif %}
      <div class="post-summary">{{ post.excerpt | markdownify }}</div>
    </article>
    <hr>    
  {% endfor %}
</div>