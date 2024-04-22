---
layout: default
permalink: /years/
---

<h2>Browse By Year</h2>

{% for year in site.data.years %}
<a href="/marker-type/{{ year.year }}">{{ year.year }}</a>
{% endfor %}