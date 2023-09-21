import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreData } from '../DataStore/DataStore';
import { NavLink } from 'react-router-dom';

function News() {
    const navi = useNavigate();
    // const data = useLocation();
    const ids = useParams().id;
    console.log(typeof (ids));
    var pid = parseInt(ids);
    const [datas] = useContext(StoreData);
    //displaynone to nav 
    var navitems = document.getElementsByClassName("navflex")[0];
    navitems.classList.add("disnone");
    //css to heading 
    var head = document.getElementsByClassName("heading")[0];
    head.classList.add("headcss");
    //dummy but display
    var dum = document.getElementsByClassName("dummybut")[0];
    dum.style.display = "block";

    const filteredDatas = datas.filter((item) => item.id === pid);
    console.log(filteredDatas);
    console.log(filteredDatas[0].category);
    const filteredCat = filteredDatas[0].category;
    console.log(filteredCat);
    const filteredDatas2 = datas.filter((item) => item.category === filteredCat && item.id !== pid);
    console.log(filteredDatas2);
    const shuffledDatas = [...filteredDatas2].sort(() => Math.random() - 0.5);
    const selectedDatas = shuffledDatas.slice(0, 3);
    console.log(datas);
    // console.log(data.state);

    const backbut = () => {
        navitems.classList.remove("disnone");
        head.classList.remove("headcss");

        dum.style.display = "none";
        navi(`/${filteredCat}`);
    }
    return (
        <div>
            {/* <h1>Hello</h1> */}
            {datas.filter((item) => item.id === parseInt(ids)).map((item, index) => {
                return (
                    <div key={index}>
                        <div className='backbutdiv'>
                            <button className='backbutton' onClick={backbut}>← Go Back</button>
                        </div>
                        <div className='itemdiv3'>
                            <h2>{item.topic}</h2>
                            <div className='author'>
                                <div className='itemdiv3_logo'>
                                    <img style={{ borderRadius: "50%" }} className="imgfil" alt="not found" src='https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg' />
                                </div>
                                <div className='createrinfo'>
                                    <h3 style={{ marginBottom: "0px" }}>Ramsuraj B</h3>
                                    <h5 style={{ margin: "0px 0px 0px 0px", color: "grey" }}>Category: {item.category}, {item.date}</h5>
                                </div>
                                <div className='div3_logos'>
                                    <img className="img_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png' alt="not found" />
                                    <img className="img_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' alt="not found" />
                                    <img className="img_logo" src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' alt="not found" />
                                    <img className='img_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="not found" />
                                </div>
                            </div>
                            <hr></hr>
                            <div className='imagediv3'>
                                <img src={item.image} alt="not found" className='imgfil' />
                            </div>

                            <p className='ptag'>{item.detail}</p>
                            <p className='ptag'>{item.detail2}</p>
                            <hr></hr>
                            <div className='author'>
                                <div className='itemdiv3_logo'>
                                    <img style={{ borderRadius: "50%" }} className="imgfil" alt="not found" src='https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg' />
                                </div>
                                <div className='createrinfo'>
                                    <h4 style={{ margin: "0px", color: "grey" }}>Written By,</h4>
                                    <h3 style={{ marginBottom: "0px", marginTop: "5px" }}>Ramsuraj B</h3>
                                    <h5 style={{ margin: "0px 0px 0px 0px", color: "grey" }}>Category: {item.category}, {item.date}</h5>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='like_share'>
                                <div className='like'>
                                    <div className="likenshare_logo">
                                        <img className='imgfil2' src="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-png-19.png" alt="not found" />
                                    </div>
                                    <h4 className='h4tag'><span className='span3'>Likes: 12.4k</span></h4>
                                </div>
                                <div className='share'>
                                    <div className='likenshare_logo'>
                                        <img className="imgfil2" src="https://cdn-icons-png.flaticon.com/512/189/189676.png" alt="not found" />
                                    </div>
                                    <h4 className='h4tag'><span className='span2'>Share this article</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className='suggestions'>
                            <h3 style={{ color: "grey", marginLeft: "4.5%" }}>More from The Siren...</h3>
                            <hr></hr>
                            <div className='related_parent'>
                                {selectedDatas.map((item, index) => {
                                    return (
                                        <div className='related_itemdiv' key={index}>
                                            <NavLink style={{ textDecoration: "none", color: "black" }} to={`/news/${item.id}`}>
                                                <p>Related Posts...</p>
                                                <div className='related_imgdiv'>
                                                    <img src={item.image} alt="not found" className='imgfil' />
                                                </div>
                                                <div className='related_contentdiv'>
                                                    <h3 style={{ margin: "10px 0px 0px 0px", textAlign: "justify", fontSize: "0.9em" }}>{item.topic.split(" ", 25).join(" ")}</h3>
                                                </div>
                                                <div className='related_author'>
                                                    <div className='relateditem_logo'>
                                                        <img style={{ borderRadius: "50%" }} className="imgfil" alt="not found" src='https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg' />
                                                    </div>
                                                    <div className='related_createrinfo'>
                                                        <h5 style={{ marginTop: 0, marginBottom: 0 }}>Ramsuraj B</h5>
                                                        <h5 style={{ marginTop: "3px", color: "grey" }}>Category: {item.category}, {item.date}</h5>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default News