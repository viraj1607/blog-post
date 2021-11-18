import { Component } from "react";
import ImgArticle from '../images/articles-img.jpg'
import { BsArrowDown } from 'react-icons/bs';
import './articles.css'

class Articles extends Component{
    render(){
        let articles=[
            {img:ImgArticle,
            heading:"Catch waves with an adventure guide",
            desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
            catgory:"Travel",
            date:"August 21 2017" 
            },
            {img:ImgArticle,
            heading:"Catch waves with an adventure guide",
            desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
            catgory:"Travel",
            date:"August 21 2017" 
            },
            {img:ImgArticle,
            heading:"Catch waves with an adventure guide",
            desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
            catgory:"Travel",
            date:"August 21 2017" 
            },
            {img:ImgArticle,
            heading:"Catch waves with an adventure guide",
            desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
            catgory:"Travel",
            date:"August 21 2017" 
            },
            {img:ImgArticle,
            heading:"Catch waves with an adventure guide",
            desc:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-",
            catgory:"Travel",
            date:"August 21 2017" 
            }
        ]
        return(
            <div className="articles-container">
                <h2>Latest Articles</h2>
                <div className="underline"></div>
                <div className="articles-container">
                    {articles.map((item,index)=>{
                        return(
                            <div key={index}>
                            <hr/>
                            <div className="articles-flex-subcontainer">
                                <img src={ImgArticle} alt="articles img" className="articles-img"/>
                                <div className="articles-content">
                                    <h3>{item.heading}</h3>
                                    <p>{item.desc}</p>
                                    <br/>
                                    <p><span>{item.catgory}</span> / {item.date}</p>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                    <div className="more">
                        <span>LOAD MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                    </div>
                </div>
                <div className="articles-main-img">
                    <h2>Title of vertical gallery</h2>
                    <p>Travel / August 21 2017</p>
                </div>
            </div>
        )
    }
}

export default Articles