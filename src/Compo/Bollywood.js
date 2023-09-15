import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreData } from '../DataStore/DataStore';

function Bollywood() {
    const [datas] = useContext(StoreData);
    console.log(datas);
    var count = 1;
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
                    <h2 className='h2topname'>Bollywood</h2>
                    <hr className='hrredline'></hr>
                    {datas.filter((item) => item.category === "bollywood").map((item, index) => {
                        return (
                            <div key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className="itemdiv">

                                        <div className='imagediv'>
                                            <img className='imgfil' src={item.image} alt="not found" />
                                        </div>
                                        <div className='contentdiv'>
                                            <h4 style={{ margin: 0, textAlign: "justify" }}>{item.topic}</h4>
                                            <p style={{ textAlign: "justify" }}>{item.info}</p>
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
                    {datas.filter((item) => item.id === 9).map((item, index) => {
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
                                            <h1 style={{ color: "grey" }}>1</h1>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </Link>;
                            </div>
                        )
                    })}
                    {datas.filter((item) => item.id >= 12 && item.id < 15).map((item, index) => {
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
                                            <h1 style={{ color: "grey" }}>{count = count + 1}</h1>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </Link>
                            </div>
                        )
                    })}
                    <div className='advertisement'>
                        <p style={{ lineHeight: "110vh" }}>Advertisement</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Bollywood