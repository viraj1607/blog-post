import { Component } from "react";
import Imgs from "../imgs/imgs";
import Latest from "../latest/latest";
import Articles from "../articles/articles";
import Advt from "../advertisement/advt";
import Posts from "../posts/posts";
import './home.css'
import Stories from "../stories/stories";

class Home extends Component{
    render(){
        return(
            <div className="home-main-container">
                <Imgs/>
                <Latest/>
                <div className="div-container">
                    <div className="div-articles">
                        <Articles/>
                    </div>
                    <div className="div-advt">
                        <Advt/>
                        <Posts/>
                    </div>
                </div>
                <Stories/>
            </div>
        )
    }
}

export default Home