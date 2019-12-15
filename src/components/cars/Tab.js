import React, { Component } from "react";
import Cars from "./Cars";
import Userinfo from "./Userinfo";
import TripDetails from "./TripDetails";
class Tab extends Component {
  constructor(props) {
    super(props);
    this.localfile = JSON.parse(localStorage.getItem("tripData"));
    this.state = {
      data: this.localfile
    };
  }
  componentDidMount() {
    if (!this.localfile) {
      this.localfile = [];
    } else {
      this.setState({
        data: this.localfile
      });
    }
  }
  render() {
    return (
      <div className="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Trip Details
            </a>
          </li>
          <li class="nav-item"></li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {/* home tab button */}
            <div className=" my-3 row">
              <div className="col-lg-4 col-md-6 col-md-12">
                {/* Filter */}
                {/* <div className="border">
                  <h1>Filter</h1>
                  <select
                    onChange={this.handlerChange}
                    className="custom-select"
                  >
                    <option value="" selected disabled>
                      Select Range
                    </option>
                    <option value="40000">40,000</option>
                    <option value="50000">50,000</option>
                    <option value="60000">60,000</option>
                    <option value="70000">70,000</option>
                    <option value="80000">80,000</option>
                    <option value="90000">Above 90,000</option>
                  </select>
                  <select className="custom-select">
                    <option value="" selected disabled>
                      Select Location
                    </option>
                    <option value="Goa">Goa</option>
                    <option value="Banaras">Banaras</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Panipat">Panipat</option>
                    <option value="Noida">Noida</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Gurgao">Gurgao</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Gurgao">Gurgao</option>
                  </select> */}
                <div>
                  <h3>Click Here to Book Car</h3>
                  <Userinfo carData={this.props.data} />
                  {/* show data here */}
                </div>
              </div>
              <div className="col-lg-8 col-md-10 col-12 row">
                <div className="row">
                  {this.props.data.map(function(element) {
                    return (
                      <Cars
                        key={element.id}
                        name={element.name}
                        img={element.img}
                        model={element.model}
                        fuel={element.fuel}
                        location={element.location}
                        rate={element.rate}
                        id={element.id}
                        topSpeed={element.topSpeed}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {/* trip details */}

            <h2>Trip Information</h2>
            {this.data ||
              this.state.data.map(function(ele) {
                return (
                  <TripDetails
                    key={ele.id}
                    name={ele.name}
                    username={ele.username}
                    amount={ele.amount}
                    fuel={ele.fuel}
                    location={ele.location}
                    distance={ele.distance}
                    id={ele.id}
                  />
                );
              })}
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          ></div>
        </div>
      </div>
    );
  }
}

export default Tab;
