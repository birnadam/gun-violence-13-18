import React, { Component } from "react";
import { Paper } from "@material-ui/core";
// import mongoose from 'mongoose';
// import axios from "axios";
// import CA from '../Data/CA';

class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: []
    };
  }

  // fetch = state => {
  //   return fetch(`http"//localhost:5000/gunDam/incidents?`, {
  //     method: "GET"
  //   })
  //     .then(response => {
  //         console.log(response.json());
  //       return response.json();
  //     })
  //     .catch(err => console.log(err));
  // };
  //   search = query => {
  //     axios.get('http://localhost:5000/gunDam')
  //      .then(res =>{
  //       const searchInfo = (res.data || []).map(obj => ({
  //         company: obj.companyName,
  //         sinage: obj.sinageCodes,
  //         method: obj.Method,
  //         notes: obj.Notes}));

  //         console.log(searchInfo);
  //         // this.setState({ searchInfo });
  //      })
  //   };

  getIncidents() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        incidents: ["incident 1", "incident 2"]
      });
    }, 1000);
  }

  componentDidMount() {
    this.getIncidents();
    // this.search();
    // this.fetch("California");
  }

  render() {
    return (
      <div>
        <Paper style={this.props.styles.Paper}>
          <div id="incident">
            {this.state.incidents.map(incident => {
              return <div>{incident}</div>;
            })}
          </div>
        </Paper>
      </div>
    );
  }
}

export default Incident;

// export default ({ styles }) =>
