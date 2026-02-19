---
title: "Gaps on the Map: Pueblo, Colorado to Cheyenne, Wyoming Beacons"
author: Zhanna
date: '2016-07-20T11:30:28-05:00'
tags: ["airway beacons"]
excerpt: >-
  Jeff Johnson interpolates the positions of airway beacons along the Pueblo—Cheyenne route that don't appear in the NGS database!
use_jquery: true  
features:
  - datatables
---

{% include post-image.html filename="1930-Pueblo-Cheyenne.jpg" thumb="1930-Pueblo-Cheyenne-225x300.jpg" caption="1930 Pueblo—Cheyenne: Excerpt of a beautiful hand-drawn map" className="alignright" %}

I received the following fascinating information from website contributor Jeff Johnson. He has used two airway maps to estimate the positions of beacons that don't appear in the NGS database, and therefore for which we have no location data.

I've added the actual coordinates as indicated on the NGS datasheets where they exist. I also found two arrows thanks to Jeff's work—can you find more? Leave a comment if so!

In addition to Jeff's description, below, of his method and results, I'll include his insightful comment:

> What fascinates me most about these beacons is that you and others seem to be inferring their positions from secondary data: that if there ever was an exhaustive and official book or list published by the airmail service, it is either lost, or waiting to be discovered in some library basement. That a nationwide system could be implemented, and then more or less lost, within a few decades, along with any documentation that might have once existed, is fascinating.
{:.clearboth}

Jeff searched the [Coast Survey's Historical Map & Chart Collection](https://historicalcharts.noaa.gov/) using their “classic” search: [Office of Coast Survey Historical Map & Chart Image Catalog](https://historicalcharts.noaa.gov/)

The chart Jeff used to develop the table below is listed as [chart #131, Airway Map Pueblo Colorado to Cheyenne Wyoming, 1930](https://www.historicalcharts.noaa.gov/image.php?filename=131-00-1930). 

Subsequently he found [another version of the map from 1928](https://www.historicalcharts.noaa.gov/image.php?filename=131-00-1928). (The 1930 version is available at the Library of Congress and is included in my [index to their airway map collection](/historical-airway-maps/), but the 1928 map is not.)

Jeff writes:

> This one chart shows some 30 beacons in eastern Colorado and southern Wyoming, only 11 of which seem to correlate with your lists of PID numbers. I decided to attempt a spreadsheet of latitudes and longitudes by measuring on-screen pixel distances to the parallels and meridians shown on the chart, and interpolating. 
>
> The beacons numbered 0? to 20 run south-to-north on a line that roughly matches today’s Interstate 25. Beacons 37 to 44 run west-to-east across southern Wyoming. I actually think that, given the large scale of the chart, my interpolation method should fix coordinates to an accuracy much better than 500 meters, perhaps 50 or less. But when I compare my values against those from your PID tables, where they exist, they aren’t quite that good. One possibility is that latitude and longitude were referenced to a slightly different global datum than that used by today’s GPS. Another is that the charts, although superbly drawn, are nevertheless hand-drawn. This is evident when they are compared to charts published just a few years later.
>
> There is the odd case of beacon #6 near Monument CO: I’m sure your PID file has it located properly, because although the arrow is long gone, there is a long area of concrete rubble visible from satellite. Also, the fact that the road that runs next to this is apparently still known as Beacon Light Road is definitely a clue. But the position of #6 on the 1928-30 charts is several Km off. I can only conclude this is a charting error. How it wasn’t discovered in the two years between is odd though. Both charts are marked “Advance Sheet — Subject to Correction.”
>
> Beacon #8, near Castle Rock CO, seems needlessly mysterious. The 1928 chart shows it, but it’s not on the 1930 chart. Instead, the 1930 chart shows two others, labeled 8A and 8B. All three are in a tight little bunch. It’s like someone kept tweaking the location: “No, I think it should be a little more to the left.” I wonder what might have been going on.
>
> The I-25 corridor is considerably more built-up today, and most of the sites in my table seem to be under modern concrete or structures. I’ve never done any field work on this remarkable little side bar of 20th century archaeology: only looking at satellite views, and I’m probably not the best at interpreting these.  
>
> This is all from just one chart. I hope you or someone else may find this archive of aeronautical charts a useful additional source of candidate sites for exploration (if you weren’t already aware of its existence). It does, however, demand some time and effort to do the pixel-counting and interpolation of coordinates.
>
> I’m just fascinated by the interactive map on your web page: not so much the lines of dots, but the gaps in the lines of dots.

| State | City                  | Legend | Beacon # | Coordinates (Interpolated) | Coordinates (Actual)   | NGS PID | Notes                                                  |
|-------|-----------------------|--------|----------|----------------------------|------------------------|---------|--------------------------------------------------------|
| CO    | Pueblo                | 2 LF   | 0?       | 38.2527, -104.6367         |                        |         |                                                        |
| CO    |                       |        | 1        | 38.4075, -104.6104         | 38.400627,-104.615438  | JK1093  |                                                        |
| CO    |                       | 1 LF   | 2        | 38.5337, -104.6484         |                        |         |                                                        |
| CO    |                       |        | 3        | 38.6975, -104.6904         | 38.690014,-104.696597  | JK1181  |                                                        |
| CO    | Colorado Springs      | 2 LF   | 4        | 38.8202, -104.7053         |                        |         |                                                        |
| CO    |                       |        | 5        | 38.99, -104.8136           | 38.991679,-104.812878  | JK1199  | Concrete base remains                                  |
| CO    | Charted off position? | 1 LF   | 6        | 39.0653, -104.8486         | 39.122724,-104.867966  | KK1650  | Along Beacon Lite Road                                 |
| CO    |                       |        | 7        | 39.2654, -104.8819         |                        |         |                                                        |
| CO    | 1928 Chart            | 1 LF   | 8        | 39.4223, -104.864          |                        |         |                                                        |
| CO    | 1930 Chart            | 1 LF   | 8A       | 39.3303, -104.8851         |                        |         |                                                        |
| CO    | 1930 Chart            |        | 8B       | 39.3763, -104.8614         |                        |         |                                                        |
| CO    |                       |        | 9        | 39.5088, -104.8839         |                        |         |                                                        |
| CO    |                       |        | 10       | 39.6293, -104.8956         |                        |         |                                                        |
| CO    | Denver                | 2 LF   | 11?      | 39.7628, -104.8611         |                        |         |                                                        |
| CO    | Unmarked Beacon?      | 3 LF   |          | 39.7609, -104.8924         |                        |         |                                                        |
| CO    | Unmarked Beacon?      |        |          | 39.7525, -104.9935         |                        |         |                                                        |
| CO    |                       |        | 12       | 39.9167, -104.8516         |                        |         |                                                        |
| CO    |                       | 1 LF   | 13       | 40.0837, -104.7875         |                        |         |                                                        |
| CO    |                       |        | 14       | 40.2723, -104.8126         |                        |         |                                                        |
| CO    | Greeley               | 2 LF   | 15?      | 40.4017, -104.6862         | 40.397018,-104.690711  | LL1223  |                                                        |
| CO    |                       |        | 16       | 40.5847, -104.7308         | 40.581291,-104.730876  | LL1260  |                                                        |
| CO    |                       |        | 17       | 40.6988, -104.773          | 40.704521,-104.780116  | LL1264  |                                                        |
| CO    |                       | 1 LF   | 18       | 40.8308, -104.8045         | 40.826392,-104.810442  | LL1277  |                                                        |
| CO    |                       |        | 19       | 40.9754, -104.8138         | 40.989763,-104.801369  | LL1272  | Concrete base from generator shed remains              |
| WY    | Cheyenne              | 2 LF   | 20?      | 41.1596, -104.813          |                        |         |                                                        |
| WY    | Laramie               | 2 LF   | 37       | 41.287, -105.5816          |                        |         |                                                        |
| WY    |                       |        | 38       | 41.2713, -105.4403         | 41.267875,-105.433681  | MO1245  | Arrow and concrete foundation of generator shed intact |
| WY    |                       |        | 39       | 41.2281, -105.2469         | 41.226233,-105.243205  | MO1218  | Arrow intact                                           |
| WY    |                       |        | 40       | 41.1984, -105.0489         | 41.196879, -105.047821 |         | Arrow intact                                           |
| WY    | Cheyenne              | 2 LF   | 41?      | 41.1596, -104.813          |                        |         |                                                        |
| WY    |                       |        | 42       | 41.165, -104.6626          | 41.164783, -104.674532 |         | Arrow intact                                           |
| WY    |                       |        | 43       | 41.1856, -104.511          | 41.181384, -104.503738 |         | Arrow intact                                           |
| WY    |                       | 1 LF   | 44       | 41.1815, -104.3281         |                        |         |                                                        |
{:.post-table}

**Legend**
- **1** Department of Commerce Intermediate Field (an emergency field for mail planes?)
- **2** Commercial or Municipal Airport
- **3** Army Navy or Marine Corps Field
- **LF** Lighting Facilities
