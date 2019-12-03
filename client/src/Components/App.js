import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Incidents from './Incidents'
import { state } from './Data/state.js'

export default class extends Component {
  state = {
    incidents: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/getAllIncidents')
    .then(res => res.json())
    .then(json => {
      this.setState({ incidents: json})
    })
  }

  getIncidentsByState() {
    console.log(incidents)
    console.log({ incidents })
    return Object.entries(
      this.state.incidents.reduce((incidents, incident) => {
        const { state } = incident

        incidents[state] = incidents[state]
          ? [...incidents[state], incident]
          : [incident]

        return incidents
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render() {
    console.log(this.state)
    const incidents = this.getIncidentsByState(),
      { category } = this.state
    return (
      <Fragment>
        <Header />

        <Incidents category={category} incidents={incidents} />

        <Footer
          category={category}
          state={state}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}
