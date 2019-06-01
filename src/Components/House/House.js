import React, { Component } from "react";
import axios from "axios";

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      img: "",
      mortgage: 0,
      rent: 0
    };
    this.updateById = this.updateById.bind(this);
    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
  }

  getFromDB() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  updateById(id, item) {
    axios.put(`/api/houses/${id}`, item).then(this.getFromDB);
  }

  render() {
    const { element, houses, key } = this.props;
    return (
      <div className="House">
        <img src={element.img} />
        <ul>
          <li>Property Name: {element.name}</li>
          <li>Address: {element.address}</li>
          <li>City: {element.city}</li>
          <li>State: {element.state}</li>
          <li>Zip: {element.zip}</li>
          <li>Monthly Mortgage: {element.mortgage}</li>
          <li>Desired Rent: {element.rent}</li>
        </ul>
        <button>Delete</button>
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
          <input onChange={e => this.setState({ zip: e.target.value })} />
          <input onChange={e => this.setState({ img: e.target.value })} />
          <input onChange={e => this.setState({ mortgage: e.target.value })} />
          <input onChange={e => this.setState({ rent: e.target.value })} />
        </div>
        <button onClick={() => this.updateById(element.id, this.state)}>
          Update
        </button>
      </div>
    );
  }
}
