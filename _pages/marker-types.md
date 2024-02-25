---
layout: default
permalink: /marker-types/
---

<ul>
  {% assign types = site.surveymarks | group_by: "type" %}
  {% for type in types %}
    {{ type.name }}
      {% for page in type.items limit: 5 %}
        <li><a href="{{page.url}}">{{ page.designation }}</a></li>
      {% endfor %}
  {% endfor %}
</ul>