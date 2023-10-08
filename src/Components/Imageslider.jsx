import React, { useEffect, useState } from "react";
import "./Imageslider.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LazyLoad from "react-lazyload";
import { Rings } from "react-loader-spinner"; // Import the loader component

function Imageslider() {
  const [article, setArticle] = useState([]);
  const [imgUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=f880a99d11114dfdac7e0ff4c7bf7940";
        const response = await fetch(url);
        const data = await response.json();
        setArticle(data.articles);
        setIsLoading(false); // Set isLoading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false on error as well
      }
    }
    fetchMyAPI();
  }, []);

  useEffect(() => {
    const urls = article.map((data) => data.urlToImage);
    setImageUrls(urls);
  }, [article]);

  const defaultImageUrl = "https://cdn.ndtv.com/common/images/ogndtv.png";

  return (
    <div className="slide-container">
      {isLoading ? (
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
        <Slide duration={5000}>
          {article.map((slideImage, index) => (
            <div key={index}>
              <a
                href={slideImage.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoad height={400}>
                  <div className="image-container">
                    <img
                      src={slideImage.urlToImage || defaultImageUrl} // Replace with your image path
                      alt="Your Image"
                      className="image "
                      style={{ width: "100%", height: "30rem" }}
                    />
                    <div className="text-container">
                      <p className="text">{slideImage.title}</p>
                    </div>
                  </div>
                </LazyLoad>
              </a>
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
}

export default Imageslider;
