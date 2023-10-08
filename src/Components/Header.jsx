
import React from "react";
import { Link } from "react-router-dom";
import { actionCreator } from "../Store";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import './HeaderModule.css'; // Import the CSS file

function Header() {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { countryChange } = bindActionCreators(actionCreator, dispatch);

  return (
    <nav className="navbar navbar-expand-lg sticky-nav">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          Daily News
        </Link>
        <button
          className="navbar-toggler navbar-toggler-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active Hover_over" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link Hover_over" to="/business">
                 {" "}
                 Business
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/entertainment">
                 {" "}
                 Entertainment
               </Link>{" "}
             </li>           <li className="nav-item">
               <Link className="nav-link Hover_over" to="/general">
                 {" "}
                 General
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/health">
                 {" "}
                 Health
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/science">
                 {" "}
                 Science
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/sports">
                 {" "}
                 Sports
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/technology">
                 {" "}
                 Technology
               </Link>{" "}
             </li>
             <li className="nav-item">
               <Link className="nav-link Hover_over" to="/weather">
               {""}
               Weather 
               </Link>{""}          
             </li>
          </ul>
        </div>
      </div>
      
      <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic" className="custom-dropdown-toggle">
        {country==="us"?"USA":country==="ch"?"CHINA":country==="ru"?"RUSSIA":country==="ar"?"ARGENTINA":country==="gr"?"GREECE":country==="za"?"SOUTH AFRICA":"INDIA"}
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{countryChange("us")}} >USA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("ch")}}>CHINA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("ru")}}>RUSSIA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("ar")}}>ARGENTINA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("gr")}}>GREECE</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("za")}}>SOUTH AFRICA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{countryChange("in")}}>INDIA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </nav>
  );
}

export default Header;
