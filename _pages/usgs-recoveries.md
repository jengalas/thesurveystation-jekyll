---
title: USGS Recoveries
layout: page
permalink: /usgs-recoveries/
_unlisted: true
---

{% assign reports = site.surveymarks | sort: "date" | reverse | where: "usgs_report", "true" %}

The following {{ reports | size }} survey marks have been reported to USGS; updates have been added to USGS datasheets.

<ul>
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a><span class="note"> • {{ report.date | date: "%B %e, %Y"}}</span></li>    
  {% endfor %}
</ul>