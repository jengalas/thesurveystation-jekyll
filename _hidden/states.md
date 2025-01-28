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
  <h2 class="state" id="{{ state | slugify }}">{{ state | capitalize }}</h2>
  <ul>
  {% for mark in allMarks %}
    {% capture thumb %}https://images.planetzhanna.com/{{ mark.date | date: "%Y/%m/%d" }}/thumbnails/{% endcapture %}
    {% if mark.location contains state %}
    <li><a href="{{mark.url}}"><img src="{{ thumb }}{{ mark.featured_image }}" style="width: 150px;"><br>{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
