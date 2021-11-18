import { Component } from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import {Route, Switch} from "react-router-dom";
import Catagory from "../common/category";
import Blog from "../blog/blog";
import Register from "../register/register";
import Author from "../author/author";


class Main extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/register" eaxct>
                        <Register/>
                    </Route>
                    <Route path="/:catagory" exact>
                        <Catagory/>
                    </Route>
                    <Route path="/:catagory/:id" eaxct>
                        <Blog/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Main