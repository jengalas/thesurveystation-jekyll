---
layout: default
title: Posts
permalink: /posts/
_unlisted: true
---

{% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

<h1>All Posts</h1>

<div class="blog">
{% for year in years %}
  <h2>{{ year.name }}</h2>

    {% for post in year.items %}
      {% include blog-index.html %}
    {% endfor %}
 
{% endfor %} 
</div>