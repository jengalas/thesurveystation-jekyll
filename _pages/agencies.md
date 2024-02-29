---
layout: default
permalink: /agencies/
---

<ul>
  {% assign types = site.surveymarks | group_by: "agency" %}
  {% for type in types reversed %}
    <h2 id="{{ type.name | slugify }}">{{ type.name }}</h2>
      {% for page in type.items reversed %}
        <li><a href="{{page.url}}">{{ page.designation }}</a></li>
      {% endfor %}
  {% endfor %}
</ul>