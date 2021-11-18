import { Component } from "react";
import ImgPosts from '../images/posts-img.jpg'
import "./posts.css";

class Posts extends Component{
    render(){
        return(
            <div className="posts-container">
                <h2>Top Posts</h2>
                <div className="underline"/>
                <div className="posts-content">
                    <img src={ImgPosts} alt="posts img" className="main-img"/>
                    <div>
                        <h3>Catch waves with an adventure guide</h3>
                        <p><span>Travel</span> / August 21 2017</p>
                    </div>
                    <hr/>
                    <div className="posts-flex-content">
                        <img src={ImgPosts} alt="posts img"/>
                        <div>
                            <h3>Catch waves with an adventure guide</h3>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="posts-flex-content">
                        <img src={ImgPosts} alt="posts img"/>
                        <div>
                            <h3>Catch waves with an adventure guide</h3>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="posts-flex-content">
                        <img src={ImgPosts} alt="posts img"/>
                        <div>
                            <h3>Catch waves with an adventure guide</h3>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="posts-flex-content">
                        <img src={ImgPosts} alt="posts img"/>
                        <div>
                            <h3>Catch waves with an adventure guide</h3>
                            <p><span>Travel</span> / August 21 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts


