import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#c5beba',
    color: '#5c001a'
  }
}

export default props => (
  <Grid container>
    <Grid item sm color="secondary">
      <LeftPane styles={styles} color="primary" />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
)
