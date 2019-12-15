import React, { Component } from "react";
export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.local = JSON.parse(localStorage.getItem("allData"));
  }

  fuelRemains = () => {
    var recentAct = this.local.map(function(ele) {
      return ele;
    });
    console.log("work", recentAct);
  };

  idVal = () => {
    return this.props.id;
  };
  render() {
    return (
      <div className="col-lg-6 col-12 m-3">
        <div className="card">
          <div className="card-header">
            <h4>Car :{this.props.name}</h4>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Rider : {this.props.name}</li>
              <li className="list-group-item">
                Location: {this.props.location}
              </li>
              <li className="list-group-item">
                Distance : {this.props.distance}
              </li>
              <li className="list-group-item">
                Fuel : {this.props.fuel} Litre (Remaining:
                {this.local.map(function(ele) {
                  if (ele.id == <idVal />) {
                    return ele.fuel;
                  }
                })}{" "}
                Litre )
              </li>
              <li className="list-group-item">
                Paid Amount : {this.props.amount} Rs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TripDetails;
