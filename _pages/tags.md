---
layout: default
title: Tags
permalink: /tags/
_unlisted: true
---

{% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

<h1>Posts by Tag</h1>

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort_natural %}

<div class="blog">
{% for item in (0..site.tags.size) %}
    {% unless forloop.last %}
    {% capture term %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
        <article id="{{ term }}">
            <h2 class="tag-heading tag-name">{{ term }}</h2>
            {% for post in site.tags[term] %}
                {% if post.title != null %}
                    {% include blog-index.html %}
                {% endif %}
            {% endfor %}
        </article>
    {% endunless %}
{% endfor %}
</div>