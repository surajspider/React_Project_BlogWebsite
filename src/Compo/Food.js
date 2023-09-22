import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreData } from '../DataStore/DataStore';
import Footer from './Footer';

function Food() {
    const [datas] = useContext(StoreData);
    console.log(datas);
    var count = 1;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // add nav bar when pressed back button from browser itself
    // var navitems = document.getElementsByClassName("navflex")[0];
    // navitems.classList.remove("disnone");
    // const loadmore = () => {
    //     return (
    //         <div>
    //             <h2>Hello!</h2>
    //         </div>
    //     )
    // }
    return (
        <div>
            <br />
            <div className='divparent'>
                <div className='leftcat'>
                    <h2 className='h2topname'>Food</h2>
                    <hr className='hrredline'></hr>
                    {datas.filter((item) => item.category === "food" && item.id >= 61 && item.id <= 67).map((item, index) => {
                        return (
                            <div key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className="itemdiv">

                                        <div className='imagediv'>
                                            <img className='imgfil' src={item.image} alt="not found" />
                                        </div>
                                        <div className='contentdiv'>
                                            <h4 style={{ margin: 0, textAlign: "justify" }}>{item.topic}</h4>
                                            <p style={{ textAlign: "justify" }}>{item.info}....</p>
                                            <p style={{ color: "grey" }}>{item.category}, {item.date}</p>
                                        </div>

                                    </div>
                                </Link>

                                <hr className='linegrey'></hr>
                            </div>
                        )
                    })}
                </div>
                <div className='rightcat'>
                    <h2 className='h2topname'>Top Posts</h2>
                    <hr className='hrredline'></hr>
                    {datas.filter((item) => item.id === 70).map((item, index) => {
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
                                    <hr></hr>
                                </Link>
                            </div>
                        )
                    })}
                    {/* {datas.filter((item) => item.id >= 71 && item.id < 74).map((item, index) => {
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
                                    <hr></hr>
                                </Link>
                            </div>
                        )
                    })} */}
                    <div className='itemdiv2_parent'>
                        {datas.filter((item) => item.id >= 71 && item.id < 74).map((item, index) => {
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
        </div >
    )
}

export default Food