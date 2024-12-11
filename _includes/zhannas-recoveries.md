## Zhanna's Recoveries

### Browse by year

{% for year in site.data.years %}
* [{{ year.year }}](/year/{{ year.year }}){% endfor %}
{: .browse-list}

### Map of survey mark recoveries

[Map of recoveries, 2002 - {{ 'now' | date: "%Y" }}](/map-of-recoveries/)