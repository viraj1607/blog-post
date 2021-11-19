import { Component } from "react";
import { Link } from "react-router-dom";
import "./imgs.css";

class Imgs extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item item1">
          <Link to="/travel/1">
            <h2>Title of vertical gallery</h2>
          </Link>
          <p>Travel / August 21 2017</p>
        </div>
        <div className="grid-item item2">
          <Link to="/travel/2">
            <h2>Title of vertical gallery</h2>
          </Link>
          <p>Travel / August 21 2017</p>
        </div>
        <div className="grid-item item3">
          <Link to="/travel/3">
            <h2>Title of vertical gallery</h2>
          </Link>
          <p>Travel / August 21 2017</p>
        </div>
      </div>
    );
  }
}

export default Imgs;
