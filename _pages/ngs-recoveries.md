---
title: NGS Recoveries
layout: default
permalink: /ngs-recoveries/
---

<ul>
  {% assign reports = site.surveymarks | where: "ngs_report", "true" %}
 
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a></li>    
  {% endfor %}
</ul>