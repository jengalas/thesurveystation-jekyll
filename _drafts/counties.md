---
layout: default
permalink: /locations/counties/
---

{% assign allMarks = site.surveymarks | concat: site.reference_marks %}

{% assign allLocations = site.surveymarks | map: "location" | sort %}

{% assign locationArray = "" | split:"" %}

{% for item in allLocations %}
  {% assign county = item[1] %}
  {% assign locationArray = locationArray | push: county | uniq %}
{% endfor %}

{% for county in locationArray %}
  <h2 class="county" id="{{ county | slugify }}">{{ county }}</h2>
  <ul>
  {% for mark in allMarks %}
    {% capture thumb %}https://planetzhanna.com/images/{{ mark.date | date: "%Y/%m/%d" }}/thumbnails/{% endcapture %}
    {% if mark.location contains county %}
    <li><a href="{{mark.url}}"><img src="{{ thumb }}{{ mark.featured_image }}" style="width: 150px;"><br>{{ mark.designation }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
