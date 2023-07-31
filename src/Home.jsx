import React, { useEffect, useState } from 'react'
import Data from './Data'
const Home = () => {
    const [categories,setcategories]=useState([]);
    const [items,setitems]=useState([]);
    useEffect(()=>{
        setcategories(Data.categories);
        setitems(Data.items);
    },[])
  return (
    <div>
      <div className='home-container'>
        <div className='categories'>
            <h2>categories</h2>
            <div>
                {categories.map((val,index)=>{
                    return (
                        <>
                        <p key={index}>{val}</p>
                        </>
                    )
                })}
            </div>
        </div>
        <div className='home-body'>
            <div className='home-body-container'>
                <h1>recommended <br/>suppliers</h1>
                <h5>A wide selection of top-quality <br/>
                    products across all categories</h5>
                    <button className='btn btn-primary'>view more</button>
            </div>
        </div>
        <div className='home-items'>
            <h2>you may like</h2>
            {items.map((val,index)=>{
                return (
                    <>
                    <div className='item-box'>
                        <div className='image'>
                        <img src={val.image}/>
                        </div>
                        <div>
                        <p>{val.name}</p>
                        <p>{val.products}</p>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
