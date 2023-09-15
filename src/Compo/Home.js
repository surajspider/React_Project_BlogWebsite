import React, { useContext } from 'react';
import { StoreData } from '../DataStore/DataStore';

function Home() {
    const [datas] = useContext(StoreData);
    return (
        <div>
            <h2>Home</h2>
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
            <div>
                {datas.map((item, index) => {
                    return (
                        <div key={index} className='size'>
                            <img className='imgfil' src={item.image} alt="not found" />
                            <h2>{item.topic}</h2>
                        </div>
                    )
                })}

            </div>
            <div>
                {datas.filter((item) => item.category === "sports").map((item, index) => {
                    return (
                        <div key={index} className='size'>
                            <img className="imgfil" src={item.image} alt="not found" />
                            <h2>{item.topic}</h2>
                            <h3>{item.info}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home