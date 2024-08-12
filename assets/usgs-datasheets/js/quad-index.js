const map = L.map('mapdiv', {center:[39.8283,-98.5795], zoom: 13, zoomControl: true, attributionControl: false, geocoderControl: true, fullscreenControl: true });
    
L.control.mapCenterCoord().addTo(map);

objBasemaps['OpenStreetMap'].addTo(map); // Assign default basemap

const lyrTopoQuads = L.geoJSON(geojsonFeature, {
    weight: 2,                  
    onEachFeature: function (feature, layer) {           
        layer.bindTooltip(feature.properties.NAME, {sticky: true});
        layer.on({
            mouseover: highlightFeature,
            mouseout: clearFeature,
            click: goToState
        });
    }
}).addTo(map);

map.fitBounds(lyrTopoQuads.getBounds());

let objOverlays = {
    "States with USGS Data": lyrTopoQuads
};

let ctlLayers = L.control.layers(objBasemaps, objOverlays).addTo(map);

let ctlAttribute = L.control.attribution({position: "bottomleft"}).addTo(map);    
ctlAttribute.addAttribution("&copy; <a target='_blank' href='https://thesurveystation.com'>Zhanna's SurveyStation</a>");

const ctlScale = L.control.scale({position: "bottomleft", metric: false, maxWidth: 200}).addTo(map);

if (L.Browser.mobile) {
    map.removeControl(map.zoomControl);
    map.removeControl(ctlScale);
}

function highlightFeature(e) {
    layer = e.target;    
    var highlight = {
        'color': '#387C44',
        'weight': 2,
        'opacity': 1
    };
    layer.setStyle(highlight);
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }    
}

function clearFeature(e) {
    lyrTopoQuads.resetStyle(e.target);  
}

function goToState(e) {
    var stateUrlName = e.target.feature.properties.NAME.toLowerCase().replace(/\s+/g, "-");
    var stateUrl = stateUrlName;
    window.open(stateUrl, "_parent");
}

