---
title: All Points
layout: page
permalink: /all-points/
---

{% assign marks = site.surveymarks | concat: site.reference_marks | sort: "date" | reverse %}
 
<div>
  {% for mark in marks %}
    {% if mark.featured_image %}
      {% capture image %}https://images.planetzhanna.com/{{ mark.date | date: "%Y" }}/{{ mark.date | date: "%m" }}/{{ mark.date | date: "%d" }}/thumbnails/{{ mark.featured_image }}{% endcapture %}
    {% else %}
      {% assign image = '""' %}
    {% endif %}
    "{{ mark.designation }}",{{ mark.status }},{{ mark.condition }},{{ mark.date | date_to_xmlschema }},{{ mark.url }},-{{ mark.longitude }},{{ mark.latitude }},{{ image }}<br>
  {% endfor %}
</div>
