import React, { useContext } from 'react';
import { StoreData } from '../DataStore/DataStore';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Technology() {
    const [datas] = useContext(StoreData);
    // add nav bar when pressed back button from browser itself
    // var navitems = document.getElementsByClassName("navflex")[0];
    // navitems.classList.remove("disnone");
    // return (
    //     <div>
    //         <h2>Welcome to the world of Technology!</h2>
    //         <div>
    //             {datas.filter((item) => item.category === "technology").map((item, index) => {
    //                 return (
    //                     <div key={index} className='size'>
    //                         <img className='imgfil' src={item.image} alt="not found" />
    //                         <h2>{item.topic}</h2>
    //                         <h4>{item.info}</h4>
    //                         <hr />
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )
    var count = 1;
    return (
        <div>
            <br />
            <div className='divparent'>
                <div className='leftcat'>
                    <h2 className='h2topname'>Technology</h2>
                    <hr className='hrredline'></hr>
                    {datas.filter((item) => item.category === "technology" && item.id >= 16 && item.id <= 22).map((item, index) => {
                        return (
                            <div key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className="itemdiv" >
                                        <div className='imagediv'>
                                            <img className='imgfil' src={item.image} alt="not found" />
                                        </div>
                                        <div className='contentdiv'>
                                            <h4 style={{ margin: 0, textAlign: "justify" }}>{item.topic}</h4>
                                            <p style={{ textAlign: "justify" }}>{item.info}....</p>
                                            <p style={{ color: "grey" }}>{item.category}, {item.date}</p>
                                        </div>
                                    </div>
                                    <hr className='linegrey'></hr>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='rightcat'>
                    <h2 className='h2topname'>Top Posts</h2>
                    <hr className='hrredline'></hr>
                    {datas.filter((item) => item.id === 23).map((item, index) => {
                        return (
                            <div key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='spldiv'>
                                        <div className='imagedivspl'>
                                            <img className="imgfil" src={item.image} alt="not found" />
                                        </div>
                                        <div className='contentdivspl'>
                                            <h4>{item.topic}</h4>
                                        </div>
                                        <div className='toppostsnum'>
                                            <h1 style={{ color: "grey", fontSize: "3em" }}>1</h1>
                                        </div>
                                    </div>
                                </Link>
                                <hr></hr>
                            </div>
                        )
                    })}
                    {/* {datas.filter((item) => item.id >= 25 && item.id < 28).map((item, index) => {
                        return (
                            <div key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='itemdiv2'>
                                        <div className='imgdiv2'>
                                            <img src={item.image} className='imgfil' alt="not found" />
                                        </div>
                                        <div className='contentdiv2'>
                                            <h5 style={{ margin: "0px 0px 0px 5px", textAlign: "justify" }}>{item.topic}</h5>
                                        </div>
                                        <div className='toppostsnum'>
                                            <h1 style={{ color: "grey", fontSize: "3em" }}>{count = count + 1}</h1>
                                        </div>
                                    </div>
                                </Link>
                                <hr></hr>
                                {console.log(item.id)}
                            </div>
                        )
                    })} */}
                    <div className='itemdiv2_parent'>
                        {datas.filter((item) => item.id >= 25 && item.id < 28).map((item, index) => {
                            return (
                                <div key={index} className='itemdiv2_child'>
                                    <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                        <div className='itemdiv2'>
                                            <div className='imgdiv2'>
                                                <img src={item.image} className='imgfil' alt="not found" />
                                            </div>
                                            <div className='contentdiv2'>
                                                <h5 style={{ margin: "0px 0px 0px 5px", textAlign: "justify" }}>{item.topic}</h5>
                                            </div>
                                            <div className='toppostsnum'>
                                                <h1 style={{ color: "grey", fontSize: "3em" }}>{count = count + 1}</h1>
                                            </div>
                                        </div>
                                        <hr className='linegrey'></hr>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='advertisement'>
                        <p style={{ lineHeight: "110vh" }}>Advertisement</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Technology