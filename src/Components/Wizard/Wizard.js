import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img: "",
      mortgage: 0,
      rent: 0
    };
    this.addHouse = this.addHouse.bind(this);
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

  addHouse(item) {
    axios.post("/api/houses", item).then(this.getFromDB);
  }

  render() {
    return (
      <div className="Wizard">
        <div className="Wizhead">
          <h1>Add New Listing</h1>
          <NavLink activeClassName="active" exact to="/">
            <button className="cbutton">Cancel</button>
          </NavLink>
        </div>
        <div className="wizContainer">
          <h2>Property Name</h2>
          <input onChange={e => this.setState({ name: e.target.value })} />
          <h2>Address</h2>
          <input onChange={e => this.setState({ address: e.target.value })} />
          <div className="label">
            <h2>City</h2>
            <h2>State</h2>
            <h2>Zip</h2>
            <h2>Img</h2>
            <h2>Mortgage</h2>
            <h2>Rent</h2>
          </div>
          <input onChange={e => this.setState({ city: e.target.value })} />
          <input onChange={e => this.setState({ state: e.target.value })} />
          <input onChange={e => this.setState({ zipcode: e.target.value })} />
          <input onChange={e => this.setState({ img: e.target.value })} />
          <input onChange={e => this.setState({ mortgage: e.target.value })} />
          <input onChange={e => this.setState({ rent: e.target.value })} />
        </div>
        <NavLink activeClassName="active" exact to="/">
          <button onClick={() => this.addHouse(this.state)}>Add</button>
        </NavLink>
      </div>
    );
  }
}
