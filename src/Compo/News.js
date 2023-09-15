import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { StoreData } from '../DataStore/DataStore';

function News() {
    const data = useLocation();
    const [datas] = useContext(StoreData);
    console.log(datas);
    console.log(data.state);
    return (
        <div>
            <h1>Hello</h1>
            {datas.filter((item) => item.id === data.state).map((item, index) => {
                return (
                    <div key={index} className='itemdiv3'>
                        <div className='imagediv3'>
                            <img src={item.image} alt="not found" className='imgfil' />
                        </div>
                        <h2>{item.topic}</h2>
                        <p>{item.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default News