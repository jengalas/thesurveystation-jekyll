---
layout: default
permalink: /usgs-recoveries/
---

<ul>
  {% assign reports = site.surveymarks | where: "usgs_report", "true" %}
 
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a></li>    
  {% endfor %}
</ul>