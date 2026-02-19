---
title: Survey Mark Hunting
layout: page
permalink: /survey-mark-hunting/
class: survey-mark-hunting
use_jquery: true
---

<figure class="alignright">
    <img src="/assets/img/go0505csm.jpg" alt="NGS Triangulation Station BEAUTIFUL" title="NGS Triangulation Station BEAUTIFUL">
    <figcaption>NGS Triangulation Station BEAUTIFUL</figcaption>
</figure>

Survey marks or monuments are objects used to mark a precise location and/or elevation on the earth. Survey mark hunting, sometimes referred to as “benchmark hunting” regardless of the type of marker being sought, is simply the activity of searching for these survey marks. When we find, or “recover,” a mark, we do not take it or disturb it in any way. We document the mark’s condition and make note of any updates to the description and geographic coordinates that we think are needed. Then, when applicable, we send our report to the National Geodetic Survey (NGS) or the U. S. Geological Survey (USGS).

[Learn more ...](/about-survey-mark-hunting/)

## Getting Started

<!-- Beginner's Guide to Survey Mark Hunting -->

[Geodetic Glossary (HTML version)](https://www.ngs.noaa.gov/CORS-Proxy/Glossary/xml/NGS_Glossary.xml)
: This is a hypertext version of the 1986 publication by the National Geodetic Survey (also available in [.pdf format](https://repository.library.noaa.gov/view/noaa/2827/noaa_2827_DS1.pdf))

[NGS Survey Mark FAQ](https://geodesy.noaa.gov/datasheets/SurveyMarks_FAQ.shtml)
: NGS provides answers to some basic questions about survey marks and datasheets.

[USGS Guide to Land Survey Benchmarks](https://libraryguides.usgs.gov/benchmarks/intro)
: USGS has a guide to basic information about survey marks and how to find them.

[Standard Numbered Notes for Description of Marks](/manual-of-geodetic-triangulation-excerpts/#standard-numbered-notes-for-description-of-marks)
: This excerpt from [The Manual of Geodetic Triangulation](/manual-of-geodetic-triangulation-excerpts/) is useful when you're out in the field and the mark descriptions refer to Note 4, Note 11, etc.

[Joy of Geodetics](/2025/01/05/joy-of-geodetics)
: For a very deep dive, The United States Power Squadrons have provided a series of presentations to instruct members on methods of surveying, types of markers, and procedures for reporting recoveries.
{: .resources-list}

<div class="responsive-two-column-grid five-three">
<div markdown=1>  

## Resources for Survey Mark Hunters

{% include survey-mark-hunting-resources.html %}

</div>

<div>
<div class="box zhannas-recoveries" markdown=1>

## Zhanna's Recoveries

### Browse by year

{% for year in site.data.years %}
* [{{ year.year }}](/year/{{ year.year }}){% endfor %}
{: .browse-list}

### Map of survey mark recoveries

[Map of recoveries, 2002 - {{ site.data.years[0].year }}](/map-of-recoveries/)

### Official reports submitted

* [NGS](/ngs-recoveries/)
* [USGS](/usgs-recoveries/)
{: .browse-list}

</div>
</div>
</div>