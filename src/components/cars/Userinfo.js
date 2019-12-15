import React, { Component } from "react";
import Display from "./Display";

export class Userinfo extends Component {
  constructor(props) {
    super(props);
    this.local = JSON.parse(localStorage.getItem("allData"));
    this.superSet = [];
    this.state = {
      name: "",
      fuel: "",
      username: "",
      location: "",
      amount: "",
      distance: "",
      id: ""
    };
  }

  //printing display in main page of userinformtion

  handle = ele => {
    this.setState({
      [ele.target.name]: ele.target.value
    });
  };
  handleChange = e => {
    {
      const singleCar = this.props.carData.filter(function(ele) {
        return ele.id == e.target.value;
      });
      this.setState({
        name: singleCar[0].name,
        fuel: singleCar[0].fuel,
        amount: singleCar[0].rate,
        id: singleCar[0].id
      });
      var showData = `YOU SELECTED
       Car Name:${singleCar[0].name}
       Rent: ${singleCar[0].rate}RS.
       Fuel: ${singleCar[0].fuel} Litre`;
      return alert(showData);
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary col-lg-10 col-md-6 col-6"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Book Car
        </button>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Cars Details
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
                <h3>Select Car ID</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <select
                      onChange={this.handleChange}
                      className="custom-select"
                    >
                      {this.local.map(function(element) {
                        return <option value={element.id}>{element.id}</option>;
                      })}
                    </select>
                  </li>
                </ul>
                <div></div>
                <h3>User Information</h3>
                <input
                  type="text"
                  placeholder="NAME"
                  onChange={this.handle}
                  name="username"
                  className="form-control"
                />
                <input
                  type="text"
                  name="location"
                  onChange={this.handle}
                  placeholder="Location"
                  className="form-control"
                />
                <input
                  type="text"
                  name="distance"
                  onChange={this.handle}
                  placeholder="Distance"
                  className="form-control"
                />
                <h3>Amount to pay:{this.state.amount} Rs. </h3>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <Display data={this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userinfo;
