import React, { useState } from "react";
import axios from "axios";
const FetchNews = () => {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=3a5970a5c3534ccbbde13d28aa051263"
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(res);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary setbtn" onClick={fetchNews} >
              Fetch News
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          
          {
            news.map((val,i)=>{
                return(
                    <div className="col-4">
                    <div className="card" style={{width: '18rem'}} key={i}>
        <img src={val.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{val.title}</h5>
          <p className="card-text">{val.description}</p>
          <a href={val.url} className="btn btn-primary" target='_blank'>Go somewhere</a>
        </div>
      </div>
      </div>
                )
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default FetchNews;
