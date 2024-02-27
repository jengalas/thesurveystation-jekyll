---
layout: default
permalink: /usgs-recoveries/
---

<ul>
  {% assign types = site.surveymarks | where: "usgs_report", "true" %}
 
  {% for type in types %}
      <li><a href="{{type.url}}">{{ type.designation }}</a></li>    
  {% endfor %}
</ul>