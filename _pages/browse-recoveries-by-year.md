---
layout: default
permalink: /browse-recoveries-by-year/
---
<div>

{% assign yearArray = '' | split: ',' %}
{% assign types = site.surveymarks | concat: site.reference_marks | group_by: "date" %}

{% for type in types %}
    {% assign dateY = type.name | date: "%Y" %}
    {% assign yearArray = yearArray | push: dateY | sort: "date" %} 
{% endfor %}

{% assign uniqYears = yearArray | uniq | sort | reverse %}

{% for year in uniqYears %}
<a href="#{{ year }}">{{ year }}</a>
{% endfor %}

{% assign recMarks = site.surveymarks | concat: site.reference_marks | where: "status", "Recovered" | sort: "date" %}
{% assign nfMarks = site.surveymarks | concat: site.reference_marks | where: "status", "Not Found" | sort: "date" %}
{% assign noteMarks = site.surveymarks | concat: site.reference_marks | where: "status", "Note Entered" | sort: "date" %}

{% for year in uniqYears %}
    <h2 id="{{ year }}">{{ year }}</h2>
    {% assign recs = recMarks | where: "date", year %}
    {% for rec in recs reversed %}
    {% capture thumb %}https://images.planetzhanna.com/{{ rec.date | date: "%Y/%m/%d" }}/thumbnails/{% endcapture %}
      <li>R: <a href="{{ rec.url }}"><img src="{{ thumb }}{{ rec.featured_image }}" style="width: 150px;"><br>{{ rec.designation }}</a></li>    
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
