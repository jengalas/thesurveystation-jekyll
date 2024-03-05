---
layout: default
permalink: /locations/states/
---

{% assign allMarks = site.surveymarks | concat: site.reference_marks %}

{% assign allLocations = allMarks | map: "location" | sort %}

{% assign locationArray = "" | split:"" %}

{% for item in allLocations %}
  {% assign state = item[0] %}
  {% assign locationArray = locationArray | push: state | uniq %}
{% endfor %}

{% for state in locationArray %}
  <h2 id="{{ state | slugify }}">{{ state | capitalize }}</h2>
  <ul>
  {% for mark in allMarks %}
    {% if mark.location contains state %}
    <li><a href="{{mark.url}}">{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
