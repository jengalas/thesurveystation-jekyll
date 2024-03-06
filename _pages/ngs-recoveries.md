---
title: NGS Recoveries
layout: default
permalink: /ngs-recoveries/
---

<ul>
  {% assign reports = site.surveymarks | concat: site.reference_marks | sort: "date" | reverse | where: "ngs_report", "true" %}
 
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a></li>    
  {% endfor %}
</ul>