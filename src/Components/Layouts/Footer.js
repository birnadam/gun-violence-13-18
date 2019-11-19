import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { makeStyles } from '@material-ui/core/styles'
import { MenuItem, FormControl, Select } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '14%',
    position: 'relative',
    top: '10px',
    border: '1px solid #C5001A',
    height: '24px',
    boxShadow: '2px 2px 8px #C5001A',
    textAlign: 'center',
    textTransform: 'uppercase'
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
  const classes = useStyles()

  const index = category ? state.findIndex(group => group === category) + 1 : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : state[index - 1])

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          <Tab label="California" />
          {/* <Tab label="Other" /> */}
          <FormControl className={classes.formControl}>
            <Select
              value={index}
              onChange={onIndexSelect}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {state.map(group => (
                <MenuItem value={group}>{group}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Tabs>
      </Paper>
    </ThemeProvider>
  )
}
