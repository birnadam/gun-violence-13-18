var lf = require('leaflet');
var d3 = require('d3');

var map = new lf.Map("map", {center: [37.8, -96.9], zoom: 4})
  .addLayer(new lf.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"));

var svg = d3.select(map.getPanes().overlayPane).append("svg"),
  g = svg.append("g").attr("class", "leaflet-zoom-hide");
