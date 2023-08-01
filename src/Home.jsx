import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Nav, Navbar } from 'react-bootstrap';
import { FaAlignLeft, FaWhmcs, FaCloudRain } from "react-icons/fa"
const Home = () => {
    const [show, setshow] = useState({
        category: false,
    });
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
            <Navbar className='d-block'>
                <Nav.Link 
                className='pb-1 pt-1'
                onMouseEnter={() => setshow((pre) => { return { ...pre, category: true } })}
                onMouseLeave={() => setshow(false)}
                > Manufacturing &Processing Machinery 
                {show.category ?
                                        <>
                                            <div className='catghome sub-menu d-flex '
                                                
                                                onMouseEnter={() => setshow((pre) => { return { ...pre, category: true } })}
                                                onMouseLeave={() => setshow(false)}>
                                                <Navbar className="d-block px-3">
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                </Navbar>
                                                <Navbar className="d-block px-3">
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                </Navbar>
                                              
                                            </div>
                                        </>
                                        : <></>
                                    }
                
                </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Consumer electronics </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Industrial equipments & components </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Electrical &electronics </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Construction & decoration </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Manufacturing &Processing Machinery </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Manufacturing &Processing Machinery </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Manufacturing &Processing Machinery </Nav.Link>
                <Nav.Link className='pb-1 pt-1'> Consumer electronics </Nav.Link>
                
            </Navbar>
           
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
