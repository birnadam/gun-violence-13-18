import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
// import * as d3 from 'd3'
import L from 'leaflet'
// import { statesData } from '../Data/us-states'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#c5beba',
    color: '#5c001a'
  }
}

export default class extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [37.8, -96],
      zoom: 4,
      layers: [
        L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hpaHdlc2xleSIsImEiOiJjanh6azFlM2gwM3Q2M2JsYngzcTRrNTl6In0.LLN1sbJdZtmpOIZmWxGyfQ',
          {
            maxZoom: 18,
            id: 'mapbox.light'
          }
        )
      ]
    })
  }
  render() {
    return (
      <Paper styles={styles}>
        <div id="map"></div>
      </Paper>
    )
  }
}
