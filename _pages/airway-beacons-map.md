---
title: Map of Airway Beacons
permalink: /airway-beacons-map/
---

{% include head.html %}

<body>
  <div id="map" class="map"></div>

  <script>
    var beaconMap = L.map('map', { fullscreenControl: true, geocoderControl: true }).setView([39.8283,-98.5795], 9);
    L.control.mapCenterCoord().addTo(beaconMap);
    var layers = {
            'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(beaconMap),
            'USGS Topo': L.tileLayer('https://caltopo.s3.amazonaws.com/topo/{z}/{x}/{y}.png', {
                attribution: 'USDA images from <a target="_blank" href="http://caltopo.com/">CalTopo</a>',
                maxZoom: 16,
                minZoom: 6
            }),
            'US National Map': L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	            maxZoom: 18,
	            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),                
            'NatGeo': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
                maxZoom: 16
            }),
            'Imagery (Clarity)': L.tileLayer('https://clarity.maptiles.arcgis.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'    
            })
        };

        var myStyle = {
            radius: 5,
            fillOpacity: 1,
            stroke: true,
            color: "white",
            weight: 1,
            opacity: 1,
            fill: true,
            clickable: true
        };
    
    jQuery.getJSON('/assets/data/airway-beacons-complete-us.geojson', function (geojsonData) {

      var categories = {};
      var Status;

      var allPoints = L.geoJson(geojsonData, {
        pointToLayer: function(feature, latlng) {            
          return L.circleMarker(latlng, myStyle);
        },
        style: function(feature) {
          switch (feature.properties.Status) {
            case "Undetermined NGS beacon/arrow":
              return {
                fillColor: "gray"
              };
            case "Updated NGS beacon/arrow":
              return {
                fillColor: "red"
              };
            case "Updated non-NGS beacon/arrow":
              return {
                fillColor: "purple"
              };
          }
        },
        
        onEachFeature: function(feature, layer) {
          function determineHasPID(pidProp) {
                if (!feature.properties.PID)
                    return "";
                else    
                    return "<b>PID:</b> <a href='https://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=" + feature.properties.PID + "' target='_blank'>" + feature.properties.PID + "</a>" + '<br/>';
            }  
            function determineHasReport(reportProp) {
                if (!feature.properties.Report)
                    return "";
                else    
                    return "<b>Status Report:</b> " + feature.properties.Report;
            }         
          layer.bindPopup(determineHasPID(feature.properties.PID)  + "<b>Designation: </b>" + feature.properties.Designation + '<br>' + "<b>Coordinates: </b>" + feature.geometry.coordinates[1] + "," + feature.geometry.coordinates[0] + "<br>" + determineHasReport(feature.properties.Report));
          
          Status = feature.properties.Status;
          // Initialize the category array if not already set.
          if (typeof categories[Status] === "undefined") {
            categories[Status] = [];
          }
          categories[Status].push(layer);
        }        
      });

      // Feature layers for control	
      var overlaysObj = {};
      var StatusName;
      var StatusArray;
      var StatusLG;

      var labelArray = [];

      for (StatusName in categories) {
        StatusArray = categories[StatusName];
        StatusLG = L.layerGroup(StatusArray).addTo(beaconMap);
        StatusLG.StatusName = StatusName;  
        overlaysObj[StatusName] = StatusLG;
        labelArray.push(StatusLG.StatusName);
      }
   
      var control = L.control.layers(layers, overlaysObj, {
        collapsed: true
      }).addTo(beaconMap);

      beaconMap.fitBounds(allPoints.getBounds());   

      var textSearch = L.control.search({
            layer: allPoints,
            initial: false,
            zoom: 9,
            marker: {animate: false, circle: false, icon: false},
            textPlaceholder: 'Search by PID ...',
            propertyName: 'PID'
      }).addTo(beaconMap);

      textSearch.on('search:locationfound', function(event) {
          event.layer.openPopup();
      });

      $(document).ready(function(){
        
        var toggleOverlays = document.getElementsByClassName("leaflet-control-layers-overlays")[0].getElementsByTagName("input");
        
        toggleOverlays[0].setAttribute('id','first');
        toggleOverlays[1].setAttribute('id','second');
        toggleOverlays[2].setAttribute('id','third');

        var counter = overlaysObj["Undetermined NGS beacon/arrow"].getLayers().length + 
                    overlaysObj["Updated non-NGS beacon/arrow"].getLayers().length +
                    overlaysObj["Updated NGS beacon/arrow"].getLayers().length;
      
        var node = document.createElement("div");                 
        var textnode = document.createTextNode(counter + " beacons/arrows");         
        node.appendChild(textnode);
        document.getElementsByClassName("leaflet-control-layers")[0].appendChild(node);
        node.setAttribute( 'id', 'counterValue' );  

        $(document).on('change', '.leaflet-control-layers-selector#first', function() {
            $checkbox = $(this);            
            if ($checkbox.is(':checked')) {
                counter = counter + (overlaysObj[labelArray[0]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              } else {
                counter = counter - (overlaysObj[labelArray[0]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              }    
        });

        $(document).on('change', '.leaflet-control-layers-selector#second', function() {
            $checkbox = $(this);            
            if ($checkbox.is(':checked')) {
                counter = counter + (overlaysObj[labelArray[1]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              } else {
                counter = counter - (overlaysObj[labelArray[1]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              }     
        });

        $(document).on('change', '.leaflet-control-layers-selector#third', function() {
            $checkbox = $(this);            
            if ($checkbox.is(':checked')) {
                counter = counter + (overlaysObj[labelArray[2]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              } else {
                counter = counter - (overlaysObj[labelArray[2]].getLayers().length);
                textnode.textContent = counter + " beacons/arrows";
              } 
        });
      });
    });
  </script>
