import { Component } from "react";
import Img from "../images/latest-img.jpg";
import './latest.css'

class Latest extends Component{
    render(){
        return(
            <div className="latest-container">
                <h2>The Latest</h2>
                <div className="underline"></div>
                <div className="latest-flex-container">
                    <div className="latest-flex-subcontainer">
                        <img src={Img} alt="image1"></img>
                        <div className="latest-content">
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a     tourist     destination. It has a plethora of temples and palaces.</p>
                            <br/>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                    <div className="latest-flex-subcontainer">
                        <img src={Img} alt="image1"></img>
                        <div className="latest-content">
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a     tourist     destination. It has a plethora of temples and palaces.</p>
                            <br/>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                    <div className="latest-flex-subcontainer">
                        <img src={Img} alt="image1"></img>
                        <div className="latest-content">
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a     tourist     destination. It has a plethora of temples and palaces.</p>
                            <br/>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Latest;