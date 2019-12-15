import React, { Component } from "react";
//trip is booked informatiion
export class Display extends Component {
  constructor(props) {
    super(props);
    this.tripSaveData = [];
  }
  saveTripData = () => {
    this.tripSaveData.push(this.props.data);
    localStorage.setItem("tripData", JSON.stringify(this.tripSaveData));
  };

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#ModalCenter"
        >
          PAY
        </button>
        <div
          class="modal fade"
          id="ModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalCenterTitle">
                  Trip Details
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h2>Trip is Booked </h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <h3>Car Details</h3>
                  </li>
                  <li className="list-group-item">
                    Car Name: {this.props.data.name}
                  </li>
                  <li className="list-group-item">
                    Fuel: {this.props.data.fuel} Litre
                  </li>
                  <li className="list-group-item">
                    Amount: {this.props.data.amount}
                  </li>
                  <li className="list-group-item">
                    <h3>Rider INFO</h3>
                  </li>

                  <li className="list-group-item">
                    Rider Name: {this.props.data.username}
                  </li>
                  <li className="list-group-item">
                    Rider Want to GO :
                    <strong>{this.props.data.location}</strong>
                  </li>
                </ul>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  onClick={this.saveTripData}
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ENJOY>>>>>>>>>>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
