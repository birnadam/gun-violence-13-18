import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
// import Incident from './Incident'
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

export default ({ incidents, category }) => (
  <ThemeProvider theme={theme}>
    <Grid container style={styles.Grid}>
      <Grid className="col-xs-12 col-md-6">
        <Map incidents={incidents} category={category} />
      </Grid>
      <Grid className="col-xs-12 col-md-6" color="secondary">
        <Paper style={styles.Paper}>
          <div id="incident">
            <Typography variant="h2" style={{ marginLeft: 10, paddingTop: 10 }}>
              Welcome!
            </Typography>
            <Typography variant="h5" style={{ marginLeft: 10, marginTop: 20 }}>
              Please select a state to display incidents
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </ThemeProvider>
)
