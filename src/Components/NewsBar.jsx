import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import { useSelector } from "react-redux";
import './Headline.css';

export default function NewsBar(props) {
    const[article,setarticle] =useState([])
    const[page,setpage] =useState(1)
    const[totalresults,settotalresults] =useState(0)
    const country = useSelector(state => state.country)


    useEffect(() => {
        async function fetchMyAPI() {
          let url=`https:newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&pageSize=9&page=${page}`
          let response = await fetch(url);
          
          response = await response.json();
          setarticle(response.articles);
          settotalresults(response.totalResults)
          // console.log("this is data", response);
        }
        fetchMyAPI();
      },
      //  [country,props.category]
       );

     const hadlePreviousClick =  async()=>{
        let url =
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&page=${page-1}&pageSize=9`;
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log("this is data", parsedata);
        setarticle(parsedata.articles)
        setpage(page-1)
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // You can use 'auto' for instant scrolling
        });
        }
    
     const hadleNextClick =  async()=>{
        let url =
         `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&page=${page+1}&pageSize=9`;
        let data = await fetch(url);
        let parsedata = await data.json();
        //console.log("this is data", parsedata);
        setarticle(parsedata.articles)
        setpage(page+1)
        console.log("this is",parsedata); 
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // You can use 'auto' for instant scrolling
        });
      }

    
    
  return (
    <>
    <div className="row background">
      {article?.map((elemnet) => {
        return (
          <div className="col-md-4 mt-4 d-flex align-items-center justify-content-center">
            <NewsItem
              title={
                elemnet.title
                  ? elemnet.title.slice(0, 35)
                  : "SpaceX rocket made a hole in ionosphere, clai..."
              }
              description={
                elemnet.description
                  ? elemnet.description.slice(0, 80)
                  : "Netflix has unveiled the 'My Netflix' tab, which replaces the Downloads tab, as"
              }
              url={elemnet.url}
              imgUrl={elemnet.urlToImage}
            ></NewsItem>
            

          </div>

        );
      })}

    {/* </div> */}
    <div className="container d-flex justify-content-between mt-5 background">
      <button
        type="button"
        className="btn btn-warning button-class" 
        onClick={hadlePreviousClick}  
        disabled={page <=1}        
      >
        &larr; Previous
      </button>
      <button type="button" className="btn btn-warning button-class" onClick={hadleNextClick} disabled={page>=Math.ceil(totalresults/10)}>
        Next &rarr;
      </button>
    </div>
    </div>
  </>  )
}
