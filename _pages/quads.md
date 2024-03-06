---
layout: default
permalink: /locations/quads/
---

{% assign allMarks = site.surveymarks | concat: site.reference_marks %}

{% assign allLocations = site.surveymarks | map: "location" | sort %}

{% assign locationArray = "" | split:"" %}

{% for item in allLocations %}
  {% assign quad = item[2] %}
  {% assign locationArray = locationArray | push: quad | uniq %}
{% endfor %}

{% for quad in locationArray %}
  <h2 id="{{ quad | slugify }}">{{ quad }}</h2>
  <ul>
  {% for mark in allMarks %}
    {% capture thumb %}https://planetzhanna.com/images/{{ mark.date | date: "%Y/%m/%d" }}/thumbnails/{% endcapture %}
    {% if mark.location contains quad %}
    <li><a href="{{mark.url}}"><img src="{{ thumb }}{{ mark.featured_image }}" style="width: 150px;"><br>{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
