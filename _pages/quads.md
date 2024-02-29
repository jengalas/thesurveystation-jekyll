---
layout: default
permalink: /locations/quads/
---

{% assign allLocations = site.surveymarks | map: "location" | sort %}

{% assign locationArray = "" | split:"" %}

{% for item in allLocations %}
  {% assign quad = item[2] %}
  {% assign locationArray = locationArray | push: quad | uniq %}
{% endfor %}

{% for quad in locationArray %}
  <h2>{{ quad }}</h2>
  <ul>
  {% for mark in site.surveymarks %}
    {% if mark.location contains quad %}
    <li><a href="{{mark.url}}">{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
