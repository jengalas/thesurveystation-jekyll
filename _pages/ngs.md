---
layout: default
permalink: /ngs/
---

# NGS Historical Geodetic Control Diagrams

<div>
    <ul class="tree">
        {% for entry in site.data.ngs-files %}
        <li>
            <details>
                <summary>{{ entry.d0 }}</summary>
                {% if entry.d1 %}                
                    <ul>
                        {% for item in entry.d1 %}
                        <li>
                            <details>
                                <summary>{{ item.name }}</summary>
                                <ul>
                                    {% for item2 in item.file %}
                                    <li><a href="https://geodata.thesurveystation.com/NGS/{{ entry.d0 }}/{{ item.name }}/{{ item2.name }}">{{ item2.name }}</a></li>
                                    {% endfor %}
                                </ul>
                            </details>
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
            </details>
        </li>
        {% endfor %}
    </ul>
</div>