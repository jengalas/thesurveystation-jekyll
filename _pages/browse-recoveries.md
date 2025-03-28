---
layout: default
permalink: /browse-recoveries/
---

<h1>Browse Survey Mark Recoveries</h1>

<section id="accordion" class="accordion open-first">
    <div class="accordion-container">    
      <div class="accordion-item">
        <button class="accordion-trigger" id="accordion-trigger-{{ forloop.index }}" aria-expanded="false" aria-controls="accordion-content-{{ forloop.index }}">
          <span class="accordion-title">Browse by Year</span>
          <span class="accordion-icon">&plus;</span>
        </button>
        <div class="accordion-content" id="accordion-content-{{ forloop.index }}" role="region" aria-labelledby="accordion-trigger-{{ forloop.index }}">
          <div class="widget__panel archive-grid cards">
          {% for year in site.data.years %}
              <div class="card">
                <a href="/year/{{ year.year }}">{{ year.year }}</a>                 
              </div>
          {% endfor %}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" id="accordion-trigger-{{ forloop.index }}" aria-expanded="false" aria-controls="accordion-content-{{ forloop.index }}">
          <span class="accordion-title">Browse by Marker Type</span>
          <span class="accordion-icon">&plus;</span>
        </button>
        <div class="accordion-content" id="accordion-content-{{ forloop.index }}" role="region" aria-labelledby="accordion-trigger-{{ forloop.index }}">
          <div class="widget__panel archive-grid cards">
          {% for type in site.data.types %}
              <div class="card">
                <a href="/marker-type/{{ type.type | slugify }}">{{ type.type }}</a>                 
              </div>
          {% endfor %}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" id="accordion-trigger-{{ forloop.index }}" aria-expanded="false" aria-controls="accordion-content-{{ forloop.index }}">
          <span class="accordion-title">Browse by Establishing Agency</span>
          <span class="accordion-icon">&plus;</span>
        </button>
        <div class="accordion-content" id="accordion-content-{{ forloop.index }}" role="region" aria-labelledby="accordion-trigger-{{ forloop.index }}">
          <div class="widget__panel archive-grid cards">
          {% for agency in site.data.agencies %}
              <div class="card">
                <a href="/agency/{{ agency.agency | slugify }}">{{ agency.agency }}</a>                 
              </div>
          {% endfor %}
          </div>
        </div>
      </div>           
    </div>
</section>

