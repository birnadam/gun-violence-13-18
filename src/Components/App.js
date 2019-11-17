import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Incidents from './Incidents'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Incidents />

        <Footer />
      </Fragment>
    )
  }
}
