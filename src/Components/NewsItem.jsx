import React from 'react'
import './Headline.css'

export default function NewsItem(props) {
  return (
    // <div className="card mobile-items" style={{width: "27rem", height: '27rem'}}>
    <div className="card mobile-items pc-items">
    <img src={props.imgUrl?props.imgUrl:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..." style={{ width: '100%', height: '200px' }}/>
    <div className="card-body">
      <h2 className="card-title fw-bold" >{props.title}...</h2>
      <p className="">{props.description}...</p>
      <a href={props.url} className="btn btn-warning button-class">Show More...</a>
    </div>
  </div>
  )
}
