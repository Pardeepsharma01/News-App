import React, { useEffect, useState } from "react";
import "./HomePageNews.css";

const HomepageNews = (props) => {
  const [response, setResponse] = useState([]);
  const [totalresults, settotalresults] = useState(0);

  const getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f880a99d11114dfdac7e0ff4c7bf7940&pageSize=1`;
    let output = await fetch(url);
    let update = await output.json();
    console.log(update);
    setResponse(update.articles);
    settotalresults(update.totalresults);
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="row">
      {response &&
        response.map((element) => {
          return (
            <div className="card mb-3 mycard " style={{ width: "rem" }}>
              <img
                src={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://cdn.ndtv.com/common/images/ogndtv.png"
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">
                  {element.title.slice(0, 100)}
                </h3>
                <p className="card-text fw-light">
                  {element.description.slice(0, 100)}
                </p>
                {/* <a href={element.url} >Read More</a> */}
                <button type="button" class="btn btn-warning button-class">
                  <a
                    className="text-white text-decoration-none"
                    href={element.url}
                  >
                    Read More
                  </a>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomepageNews;
