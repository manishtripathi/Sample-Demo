
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import Data from './Data';
import { Nav } from "react-bootstrap";

const SliderBanner = ()=>{
  const [items,setitems]=useState([]);
    useEffect(()=>{
        setitems(Data.SliderData);
    },[]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          
          <Slider {...settings}>
            {items.map((val,index)=>{
              return(
                <div>
                  <Nav.Link>
                    <img src={process.env.PUBLIC_URL + val.image} alt={val.alt}/>
                  </Nav.Link>
            </div>
              )
            })}
            
            
          </Slider>
        </div>
      );
}

export default SliderBanner