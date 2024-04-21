---
layout: default
permalink: /types/
---
{% for type in site.data.types %}
{{ type.type }}
{% endfor %}