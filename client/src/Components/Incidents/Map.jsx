import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import * as d3 from 'd3'
import L from 'leaflet'
import { statesData } from '../Data/us-states'
import 'leaflet/dist/leaflet.css'
import data from '../Data/data.csv'
// import * as Usoutline from '../Data/us_outline.json'
// import * as States from '../Data/states.json'
import * as County from '../Data/county.json'

const styles = {
  Paper: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#c5beba',
    color: '#5c001a'
  }
}

class Map extends Component {
  mapStyle = (mapType, weight) => {
    let mapTypeColor
    switch (mapType) {
      // case 'USA':
      //   mapTypeColor = '#C5BEBA'
      //   break
      // case 'state':
      //   mapTypeColor = '#C5BEBA'
      //   break
      case 'county':
        mapTypeColor = '#E4E3DB'
        break
      default:
        mapTypeColor = '#113743'
    }

    return {
      fillColor: mapTypeColor,
      weight: weight,
      opacity: 1,
      stroke: true,
      color: mapTypeColor,
      dashArray: '2',
      fillOpacity: 0.2
    }
  }

  // for loading incidents in left pane
  whenClicked = e => {}

  onEachFeature = (feature, layer) => {
    // bind click

    layer.on({
      click: this.whenClicked
    })
  }

  componentDidMount() {
    const getColor = d => {
      return d > 14000
        ? '#800026'
        : d > 12000
        ? '#BD0026'
        : d > 10000
        ? '#E31A1C'
        : d > 8000
        ? '#FC4E2A'
        : d > 6000
        ? '#FD8D3C'
        : d > 4000
        ? '#FEB24C'
        : d > 2000
        ? '#FED976'
        : '#FFEDA0'
    }

    const style = feature => {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.n_incident)
      }
    }

    const highlightFeature = e => {
      let layer = e.target

      layer.setStyle({
        weight: 2,
        color: '#C5001A',
        dashArray: '',
        fillOpacity: 0.7
      })

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront()
      }

      info.update(layer.feature.properties)
    }

    const resetHighlight = e => {
      gunViolence.resetStyle(e.target)
      info.update()
    }

    const zoomToFeature = e => {
      this.map.fitBounds(e.target.getBounds())
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      })
    }
    d3.csv(data)
      .then(function(data) {
        console.log(data)
        // let dataArray = []
        for (let d = 0; d < data.length; d++) {
          // grab State Name
          let dataState = data[d].state

          // grab data value
          let dataValue = data[d].n_incident
          for (let j = 0; j < statesData.features.length; j++) {
            let jsState = statesData.features[j].properties.name

            if (dataState === jsState) {
              // copy the data value into the JS
              statesData.features[j].properties.n_incident = dataValue
              // console.log(statesData.features[j].properties.n_incident);
              // stop looking through the JS
              break
            }
          }
        }
      })
      .catch(function(err) {
        throw err
      })

    // create map
    let usmap = L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hpaHdlc2xleSIsImEiOiJjanh6azFlM2gwM3Q2M2JsYngzcTRrNTl6In0.LLN1sbJdZtmpOIZmWxGyfQ',
      {
        maxzoom: 18,
        id: 'mapbox.light'
      }
    )

    this.map = L.map('map', {
      center: [37.8, -96],
      zoom: 3.5,
      layers: [usmap]
    })

    // add layers

    let county = L.geoJSON(County.default.features, {
      style: this.mapStyle('county', 2),
      onEachFeature: this.onEachFeature
    }).addTo(this.map)
    // let state = L.geoJSON(States.default.features, {
    //   style: this.mapStyle('state', 2),
    //   onEachFeature: this.onEachFeature
    // }).addTo(this.map)
    // let country = L.geoJSON(Usoutline.default.features, {
    //   style: this.mapStyle('USA', 4)
    // }).addTo(this.map)
    let baseMaps = {
      US: usmap
    }

    let gunViolence = L.geoJson(statesData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(this.map)

    let overlayMaps = {
      County: county,
      // State: state,
      // Country: country,
      GunViolence: gunViolence
    }

    // initialize up the L.control.layers
    L.control.layers(baseMaps, overlayMaps).addTo(this.map)

    // control that shows state info on hover
    let info = L.control()

    info.onAdd = function() {
      this._div = L.DomUtil.create('div', 'info')
      this.update()
      return this._div
    }

    info.update = function(props) {
      this._div.innerHTML =
        // '<h4>GunDam.</h4>' +
        props
          ? '<b>' +
            props.name +
            '</b><br />' +
            props.n_incident +
            ' incidents recorded'
          : 'Hover over a state to see data<br><br>Click on a state to see incidents'
    }

    info.addTo(this.map)
  }

  componentDidUpdate() {
    // check if data has changed
    
    const updateMap = () => {
      let index = this.props.category
    let coord = statesData.features[index].geometry.coordinates[0][15]
    console.log(this.props.category)
    this.map.flyTo(new L.LatLng(coord[1], coord[0]), 5)
  }
  updateMap();
  }

  render() {
    return (
      <Paper style={styles.Paper}>
        <div id="map" />
      </Paper>
    )
  }
}

export default Map
