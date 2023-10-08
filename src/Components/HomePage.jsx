import React from "react";
import HomepageNews from "./HomepageNews";
import Weather from "./Weather";
import "./HomePageModule.css";
import Imageslider from "./Imageslider";
import Headline from "./Headline";
const HomePage = () => {
  return (
    <>
    <div className="background">
      <div className="main-box">
        <div className="item">
          <HomepageNews />
        </div>
        <div className="weather">
          <Weather />
        </div>
      </div>

      <div class="container text-center b4 ">
        <div class="row">
          <div class="col  m3">
            {/* <h1 className='image_heading'>Breaking News</h1> */}
            <Imageslider />
          </div>
        </div>
      </div>

      <div class="container-fluid text-center b1 mt-3">
        <div class="row">
          <div class="col b5 ">
            <div className="heading">
              <Headline />
            </div>
          </div>
        </div>
      </div>
    </div>

    
<footer>
<div className="center">
    Copyright &copy; Pardeep Sharma. All rights reserved!
    <p>Yamuna Nagar, Haryana</p>
</div>
</footer>
</>
    
  );
};

export default HomePage;
