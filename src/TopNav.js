import { useState,useEffect } from "react";
import { Navbar,Nav } from "react-bootstrap";
import {FaAlignLeft, FaWhmcs} from "react-icons/fa"
import Data from "./Data";
const TopNav = () => {
const [categories,setcategories]=useState([]);
const [show,setshow]=useState({
    category:false,
    supplier:false,
    buyer:false,
    help:false,
    app:false,
    english:false
});
 useEffect(()=>{
        setcategories(Data.categories);
    },[])
    return (
        <>
        <div className="bottom-nav">
            <div className="first-section" >
                <Navbar>
                    <Nav.Link 
                    href="#"
                    style={{
                        borderRight:"0.3px solid darkgray",
                    position:"relative",
                    cursor:"pointer",
                    margin:"0px",
                    paddingRight:"5px"
                    }}
                    onMouseEnter={()=>setshow((pre)=>{return {...pre,category:true}})} 
                    onMouseLeave={()=>setshow(false)}
                    > <FaAlignLeft /> all categories 
                    
                    {show.category?
                <>
                <div className='categories sub-menu' 
                    style={{left:"10%",top:"55%"}} 
                    onMouseEnter={()=>setshow((pre)=>{return {...pre,category:true}})} 
                    onMouseLeave={()=>setshow(false)}>
                        
                    {/* <div>
                    {categories.map((val,index)=>{
                        return (
                            <>
                            <Nav.Link href="{val}" key={index} > {val} </Nav.Link>
                            
                            </>
                        )
                    })}
                    </div> */}
                </div>
                </>
                :<></>
                }
                    </Nav.Link>

                </Navbar>
                <Navbar>
                    <Nav.Link href="#" className="px-3">online trading</Nav.Link>
                    <Nav.Link href="#" className="px-3">smart expo</Nav.Link>
                    <Nav.Link href="#" className="px-3">top ranking products</Nav.Link>
                    <Nav.Link href="#" className="px-3">video channel</Nav.Link>
                </Navbar>
            </div>
            <div className="second-section">
            <Navbar>
                    <Nav.Link 
                    href="#" 
                    className="px-3"
                    onMouseEnter={()=>setshow((pre)=>{return {...pre,supplier:true}})}
                    onMouseLeave={()=>setshow(false)}
                    >
                        Supplier
                        {show.supplier?<div className="categories sub-menu">
                            <Nav.Link> supplier 1 </Nav.Link>
                            <Nav.Link> supplier 2 </Nav.Link>
                            <Nav.Link> supplier 3 </Nav.Link>
                        
                    </div>:<></>}
                    </Nav.Link>
                    <Nav.Link href="#" className="px-3"
                    onMouseEnter={()=>setshow((pre)=>{return {...pre,buyer:true}})}
                    onMouseLeave={()=>setshow(false)}
                    >Buyer
                    {show.buyer?
                    <div className="categories sub-menu d-flex">
                        <Navbar className="d-block">    
                        <h2>Services</h2>                         
                        <Nav.Link> supplier 1 </Nav.Link>
                            <Nav.Link href="#"> new user guide </Nav.Link>
                            <Nav.Link href="#"> auditted supplier </Nav.Link>
                            <Nav.Link href="#"> meet suppliers </Nav.Link>
                            <Nav.Link href="#"> online trading </Nav.Link>
                            <Nav.Link href="#"> buying center </Nav.Link>
                            <Nav.Link href="#"> contact us </Nav.Link>
                        </Navbar>
                        <Navbar className="d-block">       
                        <h2>Search</h2>                 
                        <Nav.Link> supplier 1 </Nav.Link>
                            <Nav.Link href="#"> supplier 2 </Nav.Link>
                            <Nav.Link href="#"> supplier 3 </Nav.Link>
                        </Navbar>
                            
                        
                    </div>:<></>}
                    </Nav.Link>
                    <Nav.Link href="#" className="px-3"
                     onMouseEnter={()=>setshow((pre)=>{return {...pre,help:true}})}
                     onMouseLeave={()=>setshow(false)}
                    >help
                     {show.help?<div className="categories sub-menu">
                            <Nav.Link href="#"> why made in china.com </Nav.Link>
                            <Nav.Link href="#"> how do we audit suppliers </Nav.Link>
                            <Nav.Link href="#"> how do we secure a payment</Nav.Link>
                        
                    </div>:<></>}
                    </Nav.Link>
                    <Nav.Link href="#" className="px-3">apps</Nav.Link>
                    <Nav.Link href="#" className="px-3">English</Nav.Link>
                </Navbar>
              
            </div>
        </div>

        </>
    )
}
export default TopNav