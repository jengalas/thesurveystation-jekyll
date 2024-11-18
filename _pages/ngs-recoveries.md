---
title: NGS Recoveries
layout: page
permalink: /ngs-recoveries/
_unlisted: true
---

{% assign reports = site.surveymarks | concat: site.reference_marks | sort: "date" | reverse | where: "ngs_report", "true" %}

The following {{ reports | size }} survey marks have been reported to NGS; updates have been added to the [NGS database](https://geodesy.noaa.gov/datasheets/index.shtml).

<ul>
  {% for report in reports %}
      <li><a href="{{ report.url }}">{{ report.designation }}</a><span class="note"> • {{ report.date | date: "%B %e, %Y"}}</span></li>    
  {% endfor %}
</ul>