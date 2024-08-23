---
layout: default
permalink: /ngs/
---

<h2>NGS Historical Geodetic Control Diagrams</h2>

<div>
    <ul>
        {% for entry in site.data.ngs-files %}
        <li>{{ entry.d0 }}
            {% if entry.d1 %}
                <ul>
                    {% for item in entry.d1 %}
                    <li>{{ item.name }}
                        <ul>
                            {% for item2 in item.file %}
                            <li><a href="https://geodata.thesurveystation.com/NGS/{{ entry.d0 }}/{{ item.name }}/{{ item2.name }}">{{ item2.name }}</a></li>
                            {% endfor %}
                        </ul>
                    </li>
                    {% endfor %}
                </ul>
            {% elsif entry.d2 %}
                <ul>
                    {% for item in entry.d2 %}
                    <li><a href="https://geodata.thesurveystation.com/NGS/{{ entry.d0 }}/{{ item.name }}">{{ item.name }}</a></li>
                    {% endfor %}
                </ul>
            {% endif %}
        </li>
        {% endfor %}
    </ul>
</div>