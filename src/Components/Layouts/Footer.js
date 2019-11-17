import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
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

export default props => (
    <ThemeProvider theme={theme}>
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      <Tab label="California" />
      <Tab label="Other" />
    </Tabs>
  </Paper>
  </ThemeProvider>
)
