---
layout: default
permalink: /browse-recoveries-by-year/
---
<div>
{% assign tagArray = '' | split: ',' %}
{% assign types = site.surveymarks | group_by: "date" %}

{% for type in types %}
    {% assign dateY = type.name | date: "%Y" %}
    {% assign tagArray = tagArray | push: dateY | sort: "date" %} 
{% endfor %}

{% assign uniqTags = tagArray | uniq %}

{% for tag in uniqTags %}
    <h2>{{ tag }}</h2>
    {% assign recs = site.surveymarks | where: "date", tag %}
    {% for rec in recs reversed %}
      <li><a href="{{ rec.url }}">{{ rec.designation }}</a></li>    
    {% endfor %}
{% endfor %}
</div>
