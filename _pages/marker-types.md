---
layout: default
permalink: /marker-types/
---

<ul>
  {% assign types = site.surveymarks | concat: site.reference_marks | group_by: "type" | sort: "name" %}

  {% for type in types %}
    <h2 id="{{ type.name | slugify }}">{{ type.name }}</h2>
      {% for page in type.items reversed %}
        <li><a href="{{page.url}}">{{ page.designation }}</a></li>
      {% endfor %}
  {% endfor %}
</ul>