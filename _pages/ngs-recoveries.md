---
layout: default
permalink: /ngs-recoveries/
---

<ul>
  {% assign types = site.surveymarks | where: "ngs_report", "true" %}
 
  {% for type in types %}
      <li><a href="{{type.url}}">{{ type.designation }}</a></li>    
  {% endfor %}
</ul>