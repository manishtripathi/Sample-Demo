import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Nav, Navbar } from 'react-bootstrap';
import { FaAlignLeft, FaCloudRain } from "react-icons/fa"
import SliderBanner from './Slider';
const Home = () => {
    const [show, setshow] = useState({
        category: false,
    });
    const [categories, setcategories] = useState([]);
    const [items, setitems] = useState([]);
    const [child, setchild] = useState([]);
    useEffect(() => {
        setcategories(Data.categories);
        setitems(Data.items);
        setchild(Data.child);
    }, [])
    return (
        <div>
            <div className='home-container'>
                <div className='categories'>

                    <h4><FaAlignLeft /> categories</h4>
                    
                    <Navbar className='d-block'>
                        {categories.map((val, index) => {
                            return (
                            <>
                                <Nav.Link
                            className='pb-1 pt-1'
                            onMouseEnter={() => setshow((pre) => { return { ...pre, category: true } })}
                            onMouseLeave={() => setshow(false)}
                        > 
                            {val.name}
                            {show.category ?
                                <>
                                    <div className='catghome sub-menu d-flex '

                                        onMouseEnter={() => setshow((pre) => { return { ...pre, category: true } })}
                                        onMouseLeave={() => setshow(false)}>
                                        <Navbar className="d-block px-3">

                                            <h4>Agriculture Machine</h4>
                                            {child.map((val, index)=>{
                                                return (
                                                    <>
                                                    <Nav.Link className="py-2">{val.name}</Nav.Link>
                                                    </>
                                                )
                                                
                                            })}
                                            
                                            
                                            <h4>Plastic and Wood working machine</h4>
                                            <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                           
                                        </Navbar>
                                        <Navbar className="d-block px-3">
                                            <h4>Agriculture Machine</h4>
                                            <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                            
                                        </Navbar>

                                    </div>
                                </>
                                : <></>
                            }

                        </Nav.Link>
                            </>
                            )
                        })

                        }
                        
                       

                    </Navbar>

                </div>
                <div className='home-body'>
                    <div className='home-body-container'>
                        <SliderBanner />
                    </div>
                </div>
                <div className='home-items'>
                    <h4>you may like</h4>
                    {items.map((val, index) => {
                        return (
                            <>
                                <div className='item-box'>
                                    <div className='image'>
                                        <img src={val.image} alt='prodc ' />
                                    </div>
                                    <div>
                                        <p>{val.name}</p>
                                        <p> <small className='txt-color'>{val.products}</small></p>
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
