---
title: NGS Recoveries
layout: page
permalink: /ngs-recoveries/
_unlisted: true
---

<ul>
  {% assign reports = site.surveymarks | concat: site.reference_marks | sort: "date" | reverse | where: "ngs_report", "true" %}
 
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a> {{ report.date | date: "%B %e, %Y"}}</li>    
  {% endfor %}
</ul>