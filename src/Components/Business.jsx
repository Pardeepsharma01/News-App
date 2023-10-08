import React, { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";
import Card from "react-bootstrap/Card";
import './Headline.css'

const Business = () => {
  const [headline, setheadline] = useState([]);
  const [loader, setloader] = useState(true);
  const [resultss, settotalresultss] = useState(0);

  const getnewsapi = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&pageSize=1`;
    let outputurl = await fetch(url);
    let changein = await outputurl.json();
    console.log("----->", resultss);
    console.log("------->", changein);
    setheadline(changein.articles);
    setloader(false);
    settotalresultss(changein.settotalresultss);
  };

  useEffect(() => {
    getnewsapi();
  }, []);

  const defaultImageUrl = "https://cdn.ndtv.com/common/images/ogndtv.png";
  return (
    
      
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
              { headline && headline.map((element) => {
                return (
                  <div>
                  <a href={element.url || defaultImageUrl} className="text-decoration-none">
                  <Card className="custom-card">
                    <Card.Img variant="top" src={element.urlToImage} style={{ width: '100%', height: '200px' }} />
                    <Card.Body>
                      <Card.Text className="fw-bold text-decoration-none fs-2">{element.title.slice(0,40)}.... </Card.Text>
                    </Card.Body>
                    <div className="bottom-name">
              <p className="">Business News</p>
              </div>
                  </Card>
                </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
    );
      
    
  
};

export default Business;
