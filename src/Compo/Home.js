import React, { useContext } from 'react';
import { StoreData } from '../DataStore/DataStore';
import { Link } from 'react-router-dom';

function Home() {
    const [datas] = useContext(StoreData);
    var count = 1;
    return (
        <div>
            <div className='homeimgdiv'>
                <div className='img-first'>
                    <img src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022-768x432.jpg"
                        alt="img not found" className='img1'></img>
                </div>
                <div className='seconddiv'>
                    <img src="https://blog-content.ixigo.com/wp-content/uploads/2016/09/shutterstock_386861746-770x430.jpg" alt="img not found" className='img2'></img>
                    <img src="https://edinburgers.co.uk/wp-content/uploads/2023/01/travelling.jpg" alt="img not found" className='img3'></img>
                </div>
            </div>
            <div className='outerdiv_home'>
                <h2 className='h2topname_home'>The Latest</h2>
                <hr className='hrredline_home'></hr>
                <div className='homelatestParent'>
                    {datas.filter((item, index) => item.id >= 18 && item.id <= 25).map((item, index) => {
                        return (
                            <div className='home_itemdiv' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='imgdiv_home'>
                                        <img className="imgfil" src={item.image} alt="not found" />
                                    </div>
                                    <div className='contentdiv_home'>
                                        <h3 style={{ margin: "10px 0px 0px 0px", textAlign: "justify" }}>{item.topic}</h3>
                                        <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1.2em" }}>{item.info}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <br />
                    <div className='divparent_home'>
                        <div className='leftcat'>
                            <h2 className='h2topname'>Latest Articles</h2>
                            <hr className='hrredline'></hr>
                            {datas.filter((item) => item.category === "bollywood" && item.id >= 2 && item.id <= 8).map((item, index) => {
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
                                        </Link>
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
                <h2 className='h2topname_home'>The Latest Stories</h2>
                <hr className='hrredline_home'></hr>
                <div className='homelatestParent'>
                    {datas.filter((item, index) => item.id >= 21 && item.id <= 23).map((item, index) => {
                        return (
                            <div className='home_itemdiv bor' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='contentdiv_home'>
                                        <h3 style={{ margin: "10px 0px 10px 0px", fontSize: "1.4em" }}>{item.topic}</h3>
                                        <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1.2em" }}>{item.info}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home