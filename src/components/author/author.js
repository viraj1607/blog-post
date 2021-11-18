import { Component } from 'react';
import AuthImg from "../images/author.png"
import "./author.css"


class Author extends Component {
    render() { 
        return (
            <div className="author-container">
                <img src={AuthImg} alt="author-img"/>
                <div>
                    <span>Name</span>
                    <p>Jan 28, 2019 · 10 min read</p>
                </div>
            </div>
        );
    }
}
 
export default Author;