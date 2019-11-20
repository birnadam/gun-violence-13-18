import React from 'react'
import { Grid } from '@material-ui/core'
import Incident from './Incident'
import Map from './Map'
import './style.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C5001A'
    },
    secondary: {
      light: '#E4E3DB',
      main: '#113743',
      contrastText: '#C5BEBA'
    }
  }
})

const styles = {
  Grid: {
    backgroundColor: '#C5BEBA'
  },
  Paper: {
    margin: 5,
    borderRadius: 5,
    color: '#5c001a'
  }
}

export default props => (
  <ThemeProvider theme={theme}>
  <Grid container style={styles.Grid}>
    <Grid className="col-xs-12 col-md-6">
      <Map />
    </Grid>
    <Grid className="col-xs-12 col-md-6" color="secondary">
      <Incident styles={styles} color="primary" />
    </Grid>
  </Grid>
  </ThemeProvider>
)
