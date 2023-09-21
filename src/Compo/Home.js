import React, { useContext } from 'react';
import { StoreData } from '../DataStore/DataStore';
import { Link, NavLink } from 'react-router-dom';
import Slider from './Slider';
import Footer from './Footer';
// import SimpleImageSlider from 'react-simple-image-slider';


function Home() {
    const [datas] = useContext(StoreData);
    const filteredDatas = datas.filter((item) => item.id % 3 === 0);
    const shuffledDatas = [...filteredDatas].sort(() => Math.random() - 0.5);
    const selectedDatas = shuffledDatas.slice(0, 8);
    const randomone = Math.floor(Math.random() * datas.length);
    console.log(typeof (randomone))
    var count = 1;
    // const sliderImages = [
    //     { url: "https://www.candorblog.com/wp-content/uploads/2017/05/travel-022-768x432.jpg" },
    //     { url: "https://blog-content.ixigo.com/wp-content/uploads/2016/09/shutterstock_386861746-770x430.jpg" },
    //     { url: "https://edinburgers.co.uk/wp-content/uploads/2023/01/travelling.jpg" }
    // ]
    // slider function


    // showDivs(slideIndex);



    // useEffect(() => {
    //     showDivs(slideIndex);
    // }, []);
    // add nav bar when pressed back button from browser itself
    // var navitems = document.getElementsByClassName("navflex")[0];
    // navitems.classList.remove("disnone");
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
            <Slider />
            <div className='outerdiv_home'>
                <h2 className='h2topname_home'>The Latest</h2>
                <hr className='hrredline_home'></hr>
                <div className='homelatestParent'>
                    {selectedDatas.map((item, index) => {
                        return (
                            <div className='home_itemdiv' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='imgdiv_home'>
                                        <img className="imgfil" src={item.image} alt="not found" />
                                    </div>
                                    <div className='contentdiv_home'>
                                        <div className='contenttopicdivsize_home'>
                                            <h3 style={{ margin: "10px 0px 0px 0px", textAlign: "justify", fontSize: "1em" }}>{item.topic.split(" ", 14).join(" ")}....</h3>
                                        </div>
                                        <div className='contentdivsize_home'>
                                            <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1em" }}>{item.info.split(" ", 20).join(" ")}....</p>
                                        </div>
                                        <p className='contentsizedate_home' style={{ color: "grey", margin: 0 }}>{item.category}, {item.date}</p>
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
                            {datas.filter((item) => (item.id % 4 === 0 || item.id % 3 === 1)).sort(() => Math.random() - 0.5).slice(0, 7).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <NavLink style={{ textDecoration: "none", color: "black" }} to={`/news/${item.id}`}>
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
                                        </NavLink>

                                        <hr className='linegrey'></hr>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='rightcat'>
                            <h2 className='h2topname'>Top Posts</h2>
                            <hr className='hrredline'></hr>
                            {datas.filter((item) => item.id === 65).map((item, index) => {
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
                                            <hr className='linegrey'></hr>
                                        </Link>
                                    </div>
                                )
                            })}
                            <div className='itemdiv2_parent'>
                                {datas.filter((item) => item.id % 25 === 1).map((item, index) => {
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
                </div >
                <h2 className='h2topname_home'>The Latest Stories</h2>
                <hr className='hrredline_home'></hr>
                <div className='homelatestParent'>
                    {datas.filter((item, index) => item.id % 28 === 1).map((item, index) => {
                        return (
                            <div className='home_itemdiv bor' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={'/news/' + item.id} state={item.id}>
                                    <div className='contentdiv_home2'>
                                        <h3 style={{ margin: "10px 0px 10px 0px", fontSize: "1.4em" }}>{item.topic}</h3>
                                        <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1.2em" }}>{item.info.split(" ", 18).join(" ")}....</p>
                                    </div>
                                    <div>
                                        <p style={{ color: "grey", margin: 0 }}>{item.category}, {item.date}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </div >
    )
}

export default Home