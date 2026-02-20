---
layout: default
title: "Browse Recoveries"
permalink: /browse-recoveries/
features:
  - leaflet
  - leaflet-enhanced
  - noUI-slider
---

<h1>Browse Survey Mark Recoveries</h1>

<div id="accordion" class="accordion">

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-year">Browse by Year of Recovery<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-year">
    <div class="widget__panel archive-grid cards">
      {% for year in site.data.years %}
        <div class="card">
          <a href="/year/{{ year.year }}">{{ year.year }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>
  
  <button class="accordion-button" aria-expanded="false" aria-controls="panel-map">Browse by Location<span
      class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-map">
    {% include recoveries-map.html %} 
      <div class="widget__panel archive-grid cards">
      {% for state in site.data.locations %}
          <div class="card">
            <a href="/location/{{ state.state | slugify }}">{{ state.state }}</a>                 
          </div>
      {% endfor %}
      </div>
  </div>

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-type">Browse by Marker Type<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-type">
    <div class="widget__panel archive-grid cards">
      {% for type in site.data.types %}
        <div class="card">
          <a href="/marker-type/{{ type.type | slugify }}">{{ type.type }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>

  <button class="accordion-button" aria-expanded="false" aria-controls="panel-agency">Browse by Establishing Agency<span
        class="accordion-icon">&plus;</span></button>
  <div class="panel" id="panel-agency">
    <div class="widget__panel archive-grid cards">
      {% for agency in site.data.agencies %}
        <div class="card">
          <a href="/agency/{{ agency.agency | slugify }}">{{ agency.agency }}</a>                 
        </div>
      {% endfor %}
    </div>
  </div>

</div>

