import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C5001A'
    },
    secondary: {
      light: '#E4E3DB',
      textSecondary: '#E4E3DB',
      main: '#113743',
      contrastText: '#C5BEBA'
    }
  }
})

export default props => (
  <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar color="primary">
        <Typography variant="h4" color="textSecondary">
           PreventGV
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
)
