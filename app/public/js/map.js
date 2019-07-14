var map = L.map('map').setView([37.8, -96], 4);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hpaHdlc2xleSIsImEiOiJjanh6azFlM2gwM3Q2M2JsYngzcTRrNTl6In0.LLN1sbJdZtmpOIZmWxGyfQ', {
    maxZoom: 18,
    id: 'mapbox.light'
  }).addTo(map);


  // control that shows state info on hover
  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };

  info.update = function (props) {
    this._div.innerHTML = '<h4>US Gun Violence Density</h4>' + (props ?
      '<b>' + props.name + '</b><br />' + props.n_incident + ' incidents recorded'
      : 'Hover over a state to see data <br>Click to see the incidents in detail');
  };

  info.addTo(map);


  // get color depending on population density value
  function getColor(d) {
    return d > 14000 ? '#800026' :
      d > 12000 ? '#BD0026' :
        d > 10000 ? '#E31A1C' :
          d > 8000 ? '#FC4E2A' :
            d > 6000 ? '#FD8D3C' :
              d > 4000 ? '#FEB24C' :
                d > 2000 ? '#FED976' :
                  '#FFEDA0';
  }

  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.n_incident)
    };
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
  }

  var geojson;

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    });
  }

  //console.log(statesData.features[0].properties.density);
  d3.csv("http://localhost:3000/data/data.csv", function(data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
      // Grab State Name
      var dataState = data[d].state;

      // Grab data value
      var dataValue = data[d].n_incident;
      for (var j = 0; j < statesData.features.length; j++) {
        var jsState = statesData.features[j].properties.name;

        if (dataState === jsState) {

          // Copy the data value into the JS
          statesData.features[j].properties.n_incident = dataValue;
          //console.log(statesData.features[j].properties.n_incident);
          // Stop looking through the JS
          break;
        }
      }
    }
    geojson = L.geoJson(statesData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  });

  // geojson = L.geoJson(statesData, {
  //   style: style,
  //   onEachFeature: onEachFeature
  // }).addTo(map);

  //how to get make makers



  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 10, 20, 50, 100, 200, 500, 1000],
      labels = [],
      from, to;

    for (var i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push(
        '<i style="background:' + getColor(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
  };

  legend.addTo(map);
