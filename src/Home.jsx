import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Nav, Navbar } from 'react-bootstrap';
import { FaAlignLeft, FaCloudRain } from "react-icons/fa"
import SliderBanner from './Slider';
const Home = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [categories, setcategories] = useState([]);
    const [items, setitems] = useState([]);

    useEffect(() => {
        setcategories(Data.categories);
        setitems(Data.items);
    }, []);
    return (
        <div>
            <div className='home-container'>
                <div className='categories'>

                    <h4><FaAlignLeft /> categories</h4>

                    <Navbar className='d-block'>
                        {categories.map((category, index) => {
                            return (
                                <>
                                    <Nav.Link
                                        className='pb-1 pt-1'
                                        onMouseEnter={() => setHoveredCategory(category)}
                                         onMouseLeave={() => setHoveredCategory(null)}
                                    >
                                        {category.name}
                                        {hoveredCategory === category && category.child && ( // Check if val.child exists
                    <div className='catghome sub-menu d-flex'>
                        <Navbar className='d-block px-3'>
                        <div className='sub-menucategories'>
                            {category.child.map((subval, subIndex) => {
                                return (
                                    <>
                                   
                                <h4>{subval.title}</h4>
                                <Nav.Link key={subIndex} className='py-1'>
                                    {subval.name}
                                </Nav.Link>
                               
                                </>
                            )})}
                            </div>
                        </Navbar>
                    </div>
                )}

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
