import React from 'react'
import Card from 'react-bootstrap/Card';

const Health = (props) => {
  
  return (
    <div>
     <a href={props.url} className="text-decoration-none">
     <Card className='custom-card'>
     <Card.Img variant="top" src={props.imgUrl
       ? props.imgUrl
       : "https://cdn.ndtv.com/common/images/ogndtv.png"} alt="health image " style={{ width: '100%', height: '200px' }} /> 
       <Card.Body>
         <Card.Text className="fw-bold text-decoration-none fs-2">
           {props.title.slice(0,40)}....
         </Card.Text>
         
       </Card.Body>
       <div className="bottom-name">
              <p className="">Health News</p>
              </div>
     </Card>
     </a>
    </div>
    
  
  )
}

export default Health