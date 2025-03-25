---
title: All Points
layout: page
permalink: /all-points/
---


  {% assign marks = site.surveymarks | concat: site.reference_marks | sort: "date" | reverse %}
 
 <div>
  {% for mark in marks %}
      "{{ mark.designation }}",{{ mark.status }},{{ mark.condition }},{{ mark.date }},{{ mark.url }},-{{ mark.longitude }},{{ mark.latitude }},https://images.planetzhanna.com/{{ mark.date | date: "%Y" }}/{{ mark.date | date: "%m" }}/{{ mark.date | date: "%d" }}/thumbnails/{{ mark.featured_image }}<br>
  {% endfor %}
  </div>
