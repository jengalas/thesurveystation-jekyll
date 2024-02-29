---
layout: default
permalink: /locations/counties/
---

{% assign allLocations = site.surveymarks | map: "location" | sort %}

{% assign locationArray = "" | split:"" %}

{% for item in allLocations %}
  {% assign county = item[1] %}
  {% assign locationArray = locationArray | push: county | uniq %}
{% endfor %}

{% for county in locationArray %}
  <h2>{{ county }}</h2>
  <ul>
  {% for mark in site.surveymarks %}
    {% if mark.location contains county %}
    <li><a href="{{mark.url}}">{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
