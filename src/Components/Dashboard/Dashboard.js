import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
    console.log(this.state.houses);
  }

  getFromDB() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  render() {
    const { houses, getFromDB } = this.state;
    console.log(houses);
    const mappedHouses = houses.map((element, index) => {
      return (
        <div>
          <div>
            <House
              houses={houses}
              key={index}
              element={element}
              getFromDB={getFromDB}
            />
          </div>
        </div>
      );
    });
    return (
      <div className="Dashboard">
        <div className="DashHeader">
          <h1>Dashboard</h1>
          <NavLink activeClassName="active" to="/wizard">
            <button>Add New Property</button>
          </NavLink>
        </div>
        <div className="dashContainer">
          <h2 className="listings">Home Listings</h2>
        </div>
        {mappedHouses}
      </div>
    );
  }
}
