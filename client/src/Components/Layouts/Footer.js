import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  tab: {
    fontSize: 8,
    minWidth: 80,
    width: 80
  }
}))

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

export default ({ state, category, onSelect }) => {
  const index = category ? state.findIndex(group => group === category) + 1 : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? 'All' : state[index - 1])
  // onSelect(index === 0 ? '' : index)
  // console.log(index)
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={index}
            onChange={onIndexSelect}
            variant="scrollable"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="ALL" />
            {state.map(group => (
              <Tab label={group} classes={{ root: classes.tab }} />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}
