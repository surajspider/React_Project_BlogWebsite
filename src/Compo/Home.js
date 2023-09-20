import React, { useContext } from 'react';
import { StoreData } from '../DataStore/DataStore';
import { Link, NavLink } from 'react-router-dom';

function Home() {
    const [datas] = useContext(StoreData);
    const filteredDatas = datas.filter((item) => item.id % 3 === 0);
    const shuffledDatas = [...filteredDatas].sort(() => Math.random() - 0.5);
    const selectedDatas = shuffledDatas.slice(0, 8);
    const randomone = Math.floor(Math.random() * datas.length);
    console.log(typeof (randomone))
    var count = 1;
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
                                        <h3 style={{ margin: "10px 0px 0px 0px", textAlign: "justify", fontSize: "1em" }}>{item.topic}</h3>
                                        <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1em" }}>{item.info.split(" ", 25).join(" ")}....</p>
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
                            {datas.filter((item) => item.id === 14).map((item, index) => {
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
                                                    <h1 style={{ color: "grey", fontSize: "3em" }}>{count = count + 1}</h1>
                                                </div>
                                            </div>
                                            <hr className='linegrey'></hr>
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
                                        <p style={{ margin: "5px 0px 0px 0px", textAlign: "justify", fontSize: "1.2em" }}>{item.info.split(" ", 25).join(" ")}....</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer className='footer'>
                <div className='footerflex'>
                    <div className='foot-one foot'>
                        <h4 style={{ textDecoration: "underline" }}>Follow US</h4>
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTgiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OCIgZD0iTTI4LjM0NCwwSDEuNjU0QTEuNjU2LDEuNjU2LDAsMCwwLDAsMS42NTZWMjguMzQ1QTEuNjU2LDEuNjU2LDAsMCwwLDEuNjU2LDMwSDI4LjM0NEExLjY1NiwxLjY1NiwwLDAsMCwzMCwyOC4zNDVoMFYxLjY1NUExLjY1NiwxLjY1NiwwLDAsMCwyOC4zNDQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNDI2N2IyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTkiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OSIgZD0iTTIxNS40NTEsMTAyLjRWOTAuOTc2aDMuODVsLjU3Ny00LjQ3aC00LjQyN1Y4My42NTljMC0xLjI5MS4zNTgtMi4xNzEsMi4yMS0yLjE3MWgyLjM0N1Y3Ny41YTMxLjU0OCwzMS41NDgsMCwwLDAtMy40MzktLjE3NmMtMy40LDAtNS43MzIsMi4wNzctNS43MzIsNS44OTJ2My4yOUgyMDd2NC40N2gzLjgzNlYxMDIuNFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0LjcyMyAtNzIuMzk3KSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="notfound" />
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9ImxpbmtlZElOIiBkPSJNMjMuNzUsMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwwLDAsNi4yNXYxNy41QTYuMjUxLDYuMjUxLDAsMCwwLDYuMjUsMzBoMTcuNUE2LjI1LDYuMjUsMCwwLDAsMzAsMjMuNzVWNi4yNUE2LjI1LDYuMjUsMCwwLDAsMjMuNzUsMFpNMTAsMjMuNzVINi4yNVYxMEgxMFpNOC4xMjUsOC40MTVBMi4yMDUsMi4yMDUsMCwxLDEsMTAuMzEzLDYuMjEsMi4yLDIuMiwwLDAsMSw4LjEyNSw4LjQxNVpNMjUsMjMuNzVIMjEuMjVWMTYuNzQ1YzAtNC4yMS01LTMuODkxLTUsMFYyMy43NUgxMi41VjEwaDMuNzV2Mi4yMDZDMTcuOTk1LDguOTc0LDI1LDguNzM1LDI1LDE1LjNaIiBmaWxsPSIjMDA3N2I3Ii8+DQo8L3N2Zz4NCg==" alt='notfound' />
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9InlvdXR1YmUiIGQ9Ik0xMi41LDExLjY2Nmw2LjY2NiwzLjMyN0wxMi41LDE4LjMzNFpNMzAsNi4yNXYxNy41QTYuMjUsNi4yNSwwLDAsMSwyMy43NSwzMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwxLDAsMjMuNzVWNi4yNUE2LjI1MSw2LjI1MSwwLDAsMSw2LjI1LDBoMTcuNUE2LjI1LDYuMjUsMCwwLDEsMzAsNi4yNVpNMjUsMTVjLS4wMjUtNS4xNTQtLjQtNy4xMjUtMy42NTQtNy4zNDYtMy0uMjA1LTkuNjkyLS4yLTEyLjY5MSwwQzUuNDA3LDcuODc1LDUuMDI1LDkuODM3LDUsMTVjLjAyNSw1LjE1NC40LDcuMTI1LDMuNjU0LDcuMzQ2LDMsLjIsOS42ODguMiwxMi42OTEsMEMyNC41OTIsMjIuMTI1LDI0Ljk3NSwyMC4xNjIsMjUsMTVaIiBmaWxsPSJyZWQiLz4NCjwvc3ZnPg0K" alt="notfound" />
                        <h3 style={{ textDecoration: "underline" }} className='hoo'>Contact Us</h3>
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNi45OTgiIHZpZXdCb3g9IjAgMCAyNyAyNi45OTgiPg0KICA8ZyBpZD0iY2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDMpIj4NCiAgICA8ZyBpZD0iXzAwMy0tLUNhbGwiIGRhdGEtbmFtZT0iMDAzLS0tQ2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAzKSI+DQogICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik0xMi4xNzYsMTUuODQ5YTEwLjksMTAuOSwwLDAsMS0zLjI5LTYuMTg2LjkyNS45MjUsMCwwLDEsLjI2Ni0uNzc0TDExLjIzOCw2LjhhLjkzMS45MzEsMCwwLDAsLjEzMS0xLjE1Mkw4LjA0OS41QS45MzEuOTMxLDAsMCwwLDYuODQzLjE1OGwtNS4zMywyLjUxQS45MjYuOTI2LDAsMCwwLDEsMy41OTNjLjI3OSwyLjY1MywxLjQzNiw5LjE3NSw3Ljg0NSwxNS41ODRzMTIuOTMsNy41NjYsMTUuNTg0LDcuODQ1YS45MjYuOTI2LDAsMCwwLC45MjUtLjUxMmwyLjUxLTUuMzNhLjkzMS45MzEsMCwwLDAtLjMzNy0xLjJsLTUuMTU1LTMuMzE5YS45MzEuOTMxLDAsMCwwLTEuMTUyLjEzbC0yLjA4NCwyLjA4NWEuOTI1LjkyNSwwLDAsMS0uNzc0LjI2NiwxMC45LDEwLjksMCwwLDEtNi4xODYtMy4yOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjk5NyAtMC4wMjkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMiIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTM3LjgyNywyMC44NjJhMS4wMzQsMS4wMzQsMCwwLDEtMS4wMzQtMS4wMzQsNy43NjcsNy43NjcsMCwwLDAtNy43NTgtNy43NTgsMS4wMzQsMS4wMzQsMCwwLDEsMC0yLjA2OSw5LjgzOCw5LjgzOCwwLDAsMSw5LjgyNyw5LjgyN0ExLjAzNCwxLjAzNCwwLDAsMSwzNy44MjcsMjAuODYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjIyMyAtNS42MzkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMyIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTQzLDE2LjAzNEExLjAzNCwxLjAzNCwwLDAsMSw0MS45NjUsMTVhMTIuOTQ1LDEyLjk0NSwwLDAsMC0xMi45My0xMi45MywxLjAzNCwxLjAzNCwwLDAsMSwwLTIuMDY5LDE1LjAxNiwxNS4wMTYsMCwwLDEsMTUsMTVBMS4wMzQsMS4wMzQsMCwwLDEsNDMsMTYuMDM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjAzNCkiIGZpbGw9IiM0MjQyNDIiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K" alt="notfound" />
                        <span>+91 - 9874561230</span><br /><br />
                        <img className='iconfooter footimage' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMy42NjUiIHZpZXdCb3g9IjAgMCAyNyAyMy42NjUiPg0KICA8ZyBpZD0ibWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuNjIyKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDMiIGRhdGEtbmFtZT0iUGF0aCAyMTUwMyIgZD0iTTE4LjY3LDMxLjYyMkgzLjA1M0EzLjA1NywzLjA1NywwLDAsMCwwLDM0LjY3NVY0OC4zNkEuNzkyLjc5MiwwLDAsMCwxLjI1LDQ5TDUuNiw0NS45YTIuMTI5LDIuMTI5LDAsMCwxLDEuMjQyLS40aDkuNTY1YTMuMDU3LDMuMDU3LDAsMCwwLDMuMDUzLTMuMDUzVjMyLjQxM0EuNzkxLjc5MSwwLDAsMCwxOC42NywzMS42MjJaTTE0LjgyNyw0MS4ySDUuNjg4YS43OTEuNzkxLDAsMSwxLDAtMS41ODJoOS4xMzlhLjc5MS43OTEsMCwxLDEsMCwxLjU4MlptMC0zLjY5MUg1LjY4OGEuNzkxLjc5MSwwLDEsMSwwLTEuNTgyaDkuMTM5YS43OTEuNzkxLDAsMSwxLDAsMS41ODJaIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDQiIGRhdGEtbmFtZT0iUGF0aCAyMTUwNCIgZD0iTTE2Mi40MzEsMTUxLjAxNlYxNjQuN2EuNzkyLjc5MiwwLDAsMS0xLjI1LjY0NGwtNC4zNDktMy4xYTIuMTI5LDIuMTI5LDAsMCwwLTEuMjQyLS40aC05LjU2NWEzLjA1NywzLjA1NywwLDAsMS0zLjA1My0zLjA1NHYtMS41aDguODY4YTQuNjQsNC42NCwwLDAsMCw0LjYzNS00LjYzNXYtNC42OTNoMi45QTMuMDU3LDMuMDU3LDAsMCwxLDE2Mi40MzEsMTUxLjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUuNDMxIC0xMTAuMjA1KSIgZmlsbD0iIzQyNDI0MiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="notfound" />
                        <span><a href="mailto:someone@example.com">Send email</a></span>
                    </div>
                    <div className='foot-two foot'>
                        <h3 style={{ textDecoration: "underline" }}>Quick Links</h3>
                        <h5><Link to="/bollywood" style={{ textDecoration: "none", color: "beige", marginBottom: "0" }}>Bollywood</Link></h5>
                        <h5><Link to="/hollywood" style={{ textDecoration: "none", color: "beige" }}>Hollywood</Link></h5>
                        <h5><Link to="/technology" style={{ textDecoration: "none", color: "beige" }}>Technology</Link></h5>
                        <h5><Link to="/fitness" style={{ textDecoration: "none", color: "beige" }}>Fitness</Link></h5>
                        <h5><Link to="/food" style={{ textDecoration: "none", color: "beige" }}>food</Link></h5>
                    </div>
                    <div className='foot-three foot'>
                        <h4>Copyright©2023</h4>
                        <h4>About Us</h4>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home