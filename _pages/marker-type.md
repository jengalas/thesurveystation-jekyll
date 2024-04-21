---
layout: default
permalink: /marker-type/
---

<h2>Marker Types</h2>

{% for type in site.data.types %}
<a href="/marker-type/{{ type.type | slugify }}">{{ type.type }}</a>
{% endfor %}