import { Component } from "react";
import './imgs.css'

class Imgs extends Component{
    render(){
        return(
            <div className="grid-container">
                <div className="grid-item item1">
                    <h2>Title of vertical gallery</h2>
                    <p>Travel / August 21 2017</p>
                </div>
                <div className="grid-item item2">
                    <h3>Title of vertical gallery</h3>
                    <p>Travel / August 21 2017</p>
                </div>
                <div className="grid-item item3">
                    <h3>Title of vertical gallery</h3>
                    <p>Travel / August 21 2017</p>
                </div>
            </div>
        )
    }
}

export default Imgs