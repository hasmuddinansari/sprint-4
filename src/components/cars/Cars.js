import React, { Component } from "react";

class Cars extends Component {
  render() {
    return (
      <div class="card shadow w-50 hover col-lg-6 col-12 my-1">
        <div class="card-body">
          <img src={this.props.img} alt="" className="img-fluid" />
          <h5 class="card-title">{this.props.name}</h5>
          <p class="card-text">
            <ul className="list-group shadow">
              <li className="list-group-item">
                <h4>ID :{this.props.id}</h4>
              </li>
              <li className="list-group-item">
                Rent Price: {this.props.rate}Rs.
              </li>
              <li className="list-group-item">Model: {this.props.model}</li>
              <li className="list-group-item">Fuel: {this.props.fuel} Litre</li>
              <li className="list-group-item">
                Top Speed : <strong>{this.props.topSpeed} km/hr</strong>
              </li>
              <li className="list-group-item">
                Location: {this.props.location}
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Cars;
