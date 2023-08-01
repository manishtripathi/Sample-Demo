import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaAlignLeft, FaWhmcs, FaCloudRain } from "react-icons/fa"
import Data from "./Data";
const TopNav = () => {
    // const [categories,setcategories]=useState([]);
    const [show, setshow] = useState({
        category: false,
        supplier: false,
        buyer: false,
        help: false,
        app: false,
        english: false
    });
    //  useEffect(()=>{
    //         setcategories(Data.categories);
    //     },[])

    return (
        <>
            <div className="bottom-nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="first-section col-md-8" >
                            <Navbar className="pb-0 pt-0">
                                <Nav.Link
                                    href="#"
                                    className="catgbtn"
                                    onMouseEnter={() => setshow((pre) => { return { ...pre, category: true } })}
                                    onMouseLeave={() => setshow(false)}
                                > <FaAlignLeft /> all categories

                                    {show.category ?
                                        <>
                                            <div className='categories2 sub-menu d-flex '
                                                style={{ left: "-2px", top: "45px",  }}
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
                                <Nav.Link href="#" className="px-3">online trading</Nav.Link>
                                <Nav.Link href="#" className="px-3">smart expo</Nav.Link>
                                <Nav.Link href="#" className="px-3">top ranking products</Nav.Link>
                                <Nav.Link href="#" className="px-3">video channel</Nav.Link>

                            </Navbar>
                           
                        </div>
                        <div className="second-section col-md-4">
                            <Navbar className="justify-content-end pb-0 pt-0">
                                <Nav.Link
                                    href="#"
                                    className="px-3"
                                    onMouseEnter={() => setshow((pre) => { return { ...pre, supplier: true } })}
                                    onMouseLeave={() => setshow(false)}
                                >
                                    Supplier
                                    {show.supplier ? <div className="categories sub-menu">
                                        <Nav.Link> supplier 1 </Nav.Link>
                                        <Nav.Link> supplier 2 </Nav.Link>
                                        <Nav.Link> supplier 3 </Nav.Link>

                                    </div> : <></>}
                                </Nav.Link>
                                <Nav.Link href="#" className="px-3"
                                    onMouseEnter={() => setshow((pre) => { return { ...pre, buyer: true } })}
                                    onMouseLeave={() => setshow(false)}
                                >Buyer
                                    {show.buyer ?
                                        <div className="categories sub-menu d-flex">
                                            <Navbar className="d-block px-3">
                                                <h4>Services</h4>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                </Navbar>
                                                <Navbar className="d-block px-3">
                                                <h4>Services</h4>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                    <Nav.Link className="py-2"> <FaCloudRain /> Agriculture And Food</Nav.Link>
                                                </Navbar>


                                        </div> : <></>}
                                </Nav.Link>
                                <Nav.Link href="#" className="px-3"
                                    onMouseEnter={() => setshow((pre) => { return { ...pre, help: true } })}
                                    onMouseLeave={() => setshow(false)}
                                >help
                                    {show.help ? <div className="categories sub-menu">
                                        <Nav.Link href="#"> why made in china.com </Nav.Link>
                                        <Nav.Link href="#"> how do we audit suppliers </Nav.Link>
                                        <Nav.Link href="#"> how do we secure a payment</Nav.Link>

                                    </div> : <></>}
                                </Nav.Link>
                                <Nav.Link href="#" className="px-3">apps</Nav.Link>
                                <Nav.Link href="#" className="px-3">English</Nav.Link>
                            </Navbar>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopNav