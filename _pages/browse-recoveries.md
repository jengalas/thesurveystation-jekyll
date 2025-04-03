---
layout: default
title: "Browse Recoveries"
permalink: /browse-recoveries/
---

<h1>Browse Survey Mark Recoveries</h1>

<div id="accordion" class="accordion">

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-1">Browse by Year of Recovery<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-1">
    <div class="widget__panel archive-grid cards">
      {% for year in site.data.years %}
        <div class="card">
          <a href="/year/{{ year.year }}">{{ year.year }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>
  
  <button class="accordion-button" aria-expanded="false" aria-controls="panel-2">Browse by Location<span
      class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-2">
    {% include recoveries-map.html %} 
      <div class="widget__panel archive-grid cards">
      {% for state in site.data.locations %}
          <div class="card">
            <a href="/location/{{ state.state | slugify }}">{{ state.state }}</a>                 
          </div>
      {% endfor %}
      </div>
  </div>

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-3">Browse by Marker Type<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-3">
    <div class="widget__panel archive-grid cards">
      {% for type in site.data.types %}
        <div class="card">
          <a href="/marker-type/{{ type.type | slugify }}">{{ type.type }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-4">Browse by Establishing Agency<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-4">
    <div class="widget__panel archive-grid cards">
      {% for agency in site.data.agencies %}
        <div class="card">
          <a href="/agency/{{ agency.agency | slugify }}">{{ agency.agency }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>

</div>

