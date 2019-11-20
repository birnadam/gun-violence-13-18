import React, { Component } from "react";
import { Paper } from "@material-ui/core";
// import mongoose from 'mongoose';
import axios from "axios";
// import { Link } from 'react-router-dom';
// import CA from '../Data/CA';
// const Inc = props => {
//   <tr>
//     <td>{props.incident.incident_id}</td>
//   </tr>
// }
class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = { incidents: ["INCIDENT"] };
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

  // getIncidents() {
  //   // setTimeout(() => {
  //   //   console.log("Our data is fetched");
  //   //   this.setState({
  //   //     incidents: ["incident 1", "incident 2"]
  //   //   });
  //   // }, 1000);
  //   return fetch(`http://localhost:5000/api/incidents`, {
  //     mode: "cors",
  //     method: "GET"
  //   })
  //     .then(response => {
  //       // this.setState({ incidents: [response] });
  //       console.log(response.json());
  //       // response.json();
  //       // return response.json();
  //     })
  //     .catch(err => console.log(err));
  //   // pullTenIncidentsByState("California");
  // }

  componentDidMount() {
    axios.get("http://localhost:5000/api/")
    .then(response => {
      this.setState({ incidents: response.data }).catch(function(error) {
        console.log(error);
      });
    });
    // this.getIncidents();
    // this.search();
    // this.fetch("California");
  }

  // incidentList() {
  //   return this.state.incidents.map(function(currentIncident,i){
  //     return <Inc incident={currentIncident} key={i} />
  //   })
  // }

  render() {
    return (
      <div>
        <Paper style={this.props.styles.Paper}>
          <div id="incident">
            {this.state.incidents.map(incident => {
              return <div>{incident}</div>;
            })}
          </div>
          {/* <h3>Incidents List</h3>
          <table className="table table-striped" style={{marginTop: 20 }}>
            <tr>
              <th>{this.state.incidents}</th>
            </tr>
          </table> */}
        </Paper>
      </div>
    );
  }
}

export default Incident;

// export default ({ styles }) =>
