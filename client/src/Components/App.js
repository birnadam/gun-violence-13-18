import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Incidents from './Incidents'
import { state } from './Data/state.js'
import { incidents } from './Data/incidents.js'

export default class extends Component {
  state = {
    incidents
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
