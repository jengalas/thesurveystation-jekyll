var map;
var lyrOSM;
var lyrUSGSTopo;
var lyrTopo;
var lyrImagery;
var lyrTopoQuads; 
var lyrInfo;         
var ctlAttribute;
var ctlScale;
var ctlLayers;
var ctlInfo;
var ctlSearch;
var objBasemaps;
var objOverlays;     

$(document).ready(function(){

    map = new L.map('mapdiv', {center:[39.8283,-98.5795], zoom: 13, zoomControl: true, attributionControl: false, fullscreenControl: true, geocoderControl: { states : current_state } });
    
    lyrStreets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    lyrUSGSTopo = L.tileLayer('https://caltopo.s3.amazonaws.com/topo/{z}/{x}/{y}.png', {
        attribution:"USDA images from <a href='https://caltopo.com/'>CalTopo</a>", "minZoom":6, "maxZoom":16});
    lyrTopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });
    lyrImagery = L.tileLayer('https://clarity.maptiles.arcgis.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      });
    map.addLayer(lyrStreets);                
    
    objBasemaps = {
        "Streets": lyrStreets,
        "OpenStreetMap": lyrOSM,
        "USGS Topo": lyrUSGSTopo,
        "Topo Map": lyrTopo,
        "Imagery": lyrImagery
    };

    lyrTopoQuads = L.geoJSON(geojsonFeature, {
        weight: 2,                  
        onEachFeature: function (feature, layer) {
            var popupText = '<b>'+feature.properties.name+'</b>';
            if (feature.properties.vertical) {
                popupText += '<br><a target="_blank" href="' + feature.properties.vertical + '">Vertical, ' + feature.properties.vyear + '</a>';
            }
            if (feature.properties.horizontal) {
                popupText += '<br><a target="_blank" href="' + feature.properties.horizontal + '">Horizontal, ' + feature.properties.hyear;
            }
            if (feature.properties.hvcontrol) {
                popupText += '<br><a target="_blank" href="' + feature.properties.hvcontrol + '">Horizontal & Vertical Control Data, ' + feature.properties.hvyear;
            }
            if (feature.properties.triangulation) {
                popupText += '<br><a target="_blank" href="' + feature.properties.triangulation + '">Triangulation, ' + feature.properties.tyear;
            }
            if (feature.properties.coe) {
                popupText += '<br><a target="_blank" href="' + feature.properties.coe + '">Corps of Engineers, ' + feature.properties.cyear;
            }
            if (feature.properties.coev) {
                popupText += '<br><a target="_blank" href="' + feature.properties.coev + '">Corps of Engineers (Vertical), ' + feature.properties.cvyear;
            } 
            if (feature.properties.coeh) {
                popupText += '<br><a target="_blank" href="' + feature.properties.coeh + '">Corps of Engineers (Horizontal), ' + feature.properties.chyear;
            } 
            if (feature.properties.restricted) {
                popupText += '<br><a target="_blank" href="' + feature.properties.restricted + '">Restricted, ' + feature.properties.rsyear;
            }
            if (feature.properties.tva) {
                popupText += '<br><a target="_blank" href="' + feature.properties.tva + '">Tennessee Valley Authority, ' + feature.properties.tvayear;
            }
            if (feature.properties.usma) {
                popupText += '<br><a target="_blank" href="' + feature.properties.usma + '">U. S. Military Academy, ' + feature.properties.usmayear;
            }
            if (feature.properties.misc) {
                popupText += '<br><a target="_blank" href="' + feature.properties.misc + '">Miscellaneous, ' + feature.properties.myear;
            }
            if (feature.properties.usfs) {
              popupText += '<br><a target="_blank" href="' + feature.properties.usfs + '">U. S. Forest Service, ' + feature.properties.usfsyear;
            }
            if (feature.properties.tidal) {
                popupText += '<br><a target="_blank" href="' + feature.properties.tidal + '">Tidal Bench Marks, ' + feature.properties.tidalyear;
            }
            if (feature.properties.recoveries) {
                popupText += '<br><a target="_blank" href="' + feature.properties.recoveries + '">Recovery Notes, ' + feature.properties.ryear;
            }
            if (feature.properties.notes) {
                popupText += '<br>Note: ' + feature.properties.notes;
            }                        
            layer.bindPopup(popupText);
            layer.on({
                mouseover: highlightFeature,
                mouseout: clearFeature
            });
        }
    }).addTo(map);

    map.fitBounds(lyrTopoQuads.getBounds());

    objOverlays = {
        "15' USGS Topo Quads": lyrTopoQuads
    };

    ctlLayers = L.control.layers(objBasemaps, objOverlays).addTo(map);

    ctlAttribute = L.control.attribution({position: "bottomleft"}).addTo(map);    
    ctlAttribute.addAttribution("&copy; <a target='_blank' href='https://thesurveystation.com'>Zhanna's SurveyStation</a>");

    ctlScale = L.control.scale({position: "bottomleft", metric: false, maxWidth: 200}).addTo(map);

    ctlInfo = L.control({position: "bottomright"});

    ctlInfo.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	ctlInfo.update = function (props) {
        if (props != undefined) {
            this._div.innerHTML = "<b>USGS Quad</b><br>" + props.name;
            this._div.style.padding = "10px 12px";
        }
        else {
            this._div.innerHTML = "";
            this._div.style.padding = "0";
        }
	};

	ctlInfo.addTo(map);
    
    map.on('mousemove', function(e){
        $("#mouse-location").html(LatLngToArrayString(e.latlng));
    });

    if (L.Browser.mobile) {
        map.removeControl(map.zoomControl);
        map.removeControl(ctlInfo);
        map.removeControl(ctlScale);
    }

    function highlightFeature(e) {
        layer = e.target;    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }    
        ctlInfo.update(layer.feature.properties);
    }

    function clearFeature(e) {
        layer = e.target;    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }    
        ctlInfo.update();
    }

    // function highlightFeat(feature) {
    //     console.log(feature.layer.feature.properties.name);
    //     ctlInfo.update(feature.layer.feature.properties.name);
    // }

});

function LatLngToArrayString(ll) {
    return "[" + ll.lat.toFixed(5) + ", " + ll.lng.toFixed(5) + "]";
}

