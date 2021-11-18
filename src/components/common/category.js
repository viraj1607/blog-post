import { Component } from "react";
import Advt from "../advertisement/advt";
import Posts from "../posts/posts";
import List from "./list"
import "./category.css"


class Catagory extends Component{
    render(){
        return (
            <div className="common-main-container">
                <div className="div-articles">
                    <List/>
                </div>
                <div className="div-advt">
                    <Posts/>
                    <Advt/>
                </div>
            </div>
        )
    }
}

export default Catagory;