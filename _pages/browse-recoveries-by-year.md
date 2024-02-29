---
layout: default
permalink: /browse-recoveries-by-year/
---
<div>
{% assign yearArray = '' | split: ',' %}
{% assign types = site.surveymarks | group_by: "date" %}

{% for type in types %}
    {% assign dateY = type.name | date: "%Y" %}
    {% assign yearArray = yearArray | push: dateY | sort: "date" %} 
{% endfor %}

{% assign uniqYears = yearArray | uniq | sort | reverse %}

{% assign recMarks = site.surveymarks | where: "status", "Recovered" %}
{% assign nfMarks = site.surveymarks | where: "status", "Not Found" %}
{% assign noteMarks = site.surveymarks | where: "status", "Note Entered" %}

{% for year in uniqYears %}
    <h2>{{ year }}</h2>
    {% assign recs = recMarks | where: "date", year %}
    {% for rec in recs reversed %}
      <li>R: <a href="{{ rec.url }}">{{ rec.designation }}</a></li>    
    {% endfor %}
    {% assign recs = nfMarks | where: "date", year %}
    {% for rec in recs reversed %}
      <li>NF: <a href="{{ rec.url }}">{{ rec.designation }}</a></li>    
    {% endfor %}
    {% assign recs = noteMarks | where: "date", year %}
    {% for rec in recs reversed %}
      <li>Note: <a href="{{ rec.url }}">{{ rec.designation }}</a></li>    
    {% endfor %}
{% endfor %}
</div>
