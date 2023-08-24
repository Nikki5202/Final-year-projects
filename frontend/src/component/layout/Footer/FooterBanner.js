import React from 'react'
import veges from "../../../images/pc.jpg"
import './FooterBanner.css'
const FooterBanner = () => {
    return (
        <div className='FooterBanner'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Custom PC Build at Lowest Price
                </h1>
                <p>Place your order to deliver it right to your doorstep is smooth and hassle-free
                </p>
            </div>
        </div>
    )
}

export default FooterBanner