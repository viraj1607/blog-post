import { Component } from "react";
import { BsArrowDown } from 'react-icons/bs';
import "./stories.css"

class Stories extends Component{
    render(){
        return(
            <div className="stories-main-container">
                <h2>Latest Stories</h2>
                <div className="underline"/>
                <hr/>
                <div className="stories-flex-container">
                    <div className="stories-flex-subcontainer">
                        <h3>Catch waves with an adventure guide</h3>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        <br/>
                        <p><span>Travel</span> / August 21 2017</p>
                    </div>
                    <div className="stories-flex-subcontainer">
                        <h3>Catch waves with an adventure guide</h3>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        <br/>
                        <p><span>Travel</span> / August 21 2017</p>
                    </div>
                    <div className="stories-flex-subcontainer">
                        <h3>Catch waves with an adventure guide</h3>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        <br/>
                        <p><span>Travel</span> / August 21 2017</p>
                    </div>
                </div>
                <hr/>
                <div className="more">
                        <span>VIEW MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                </div>
            </div>
        )
    }
}

export default Stories;