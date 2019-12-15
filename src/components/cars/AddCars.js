import React, { Component } from "react";
var data;
if (localStorage.getItem("allData") == undefined) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("allData"));
}
export class AddCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      model: "",
      fuel: "",
      id: "",
      topSpeed: "",
      location: "",
      img: "",
      rate: ""
    };
  }
  handle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    var file = this.state;
    data = JSON.parse(localStorage.getItem("allData"));
    data.push(file);
    localStorage.setItem("allData", JSON.stringify(data));
    alert("New Car is Added. Refresh to Load!");
  };
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary col-lg-10 col-md-6 col-6"
          data-toggle="modal"
          data-target="#Center"
        >
          Add More Cars
          <i className="fas fa-plus mx-2"></i>
        </button>
        <div
          class="modal fade"
          id="Center"
          tabindex="-1"
          role="dialog"
          aria-labelledby="CenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="CenterTitle">
                  ADD NEW CAR
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
                <input
                  type="text"
                  placeholder="Name of Car"
                  onChange={this.handle}
                  name="name"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  placeholder="Rent Price"
                  onChange={this.handle}
                  name="rate"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  placeholder="id(1..2..3..)"
                  onChange={this.handle}
                  name="id"
                  className="form-control my-1"
                />

                <input
                  type="text"
                  name="model"
                  onChange={this.handle}
                  placeholder="Model"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  name="fuel"
                  onChange={this.handle}
                  placeholder="Fuel"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  name="topSpeed"
                  onChange={this.handle}
                  placeholder="Top Speed"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  name="location"
                  onChange={this.handle}
                  placeholder="Location"
                  className="form-control my-1"
                />
                <input
                  type="text"
                  name="img"
                  onChange={this.handle}
                  placeholder="Image url (www.google.com/file.jpg)"
                  className="form-control my-1"
                />
              </div>
              <div class="modal-footer">
                <button
                  onClick={this.handleClick}
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCars;
