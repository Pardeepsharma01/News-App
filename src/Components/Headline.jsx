import React, { useState, useEffect } from "react";
import Health from "./Health";
import {Rings} from 'react-loader-spinner';
import Technology from "./Technology";
import Business from "./Business";
import Sports from "./Sports"
import General from "./Science"
import './Headline.css';

const Headline = () => {
  const [headline, setheadline] = useState([]);
  const [loader, setloader] = useState(true);
  const [resultss, settotalresultss] = useState(0);

  const getnewsapi = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&pageSize=1`;
    let outputurl = await fetch(url);
    let changein = await outputurl.json();
    console.log("----->",resultss)
    console.log("------->", changein);
    setheadline(changein.articles);
    setloader(false);
    settotalresultss(changein.settotalresultss);
  };

  useEffect(() => {
    getnewsapi();
  }, []);
  return (
    <div className="main-box">
    <div className="Science-card">
      {loader ? (
        <div className="d-flex align-items-center justify-content-center loader">
          <Rings
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          {headline && headline.map((element) => {
            return (
              <div className=" headlinecards">
                <Health
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "SpaceX rocket made a hole in ionosphere, clai..."
                  }
                  url= {element.url}
                  imgUrl={element.urlToImage}
                  description={
                    element.description
                      ? element.description.slice(0,60)
                      : "Netflix has unveiled the 'My Netflix' tab, which replaces the Downloads tab, as"
                  }
                />
                
                
              </div>
            );
          })}
        </div>
      )}
    </div>
                 <Technology />
                <Business/>
                <Sports/>
                <General/> 
    </div>
  );
};

export default Headline;
