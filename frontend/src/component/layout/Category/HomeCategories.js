import React from 'react'
import './HomeCategories.css'
import img1 from "../../../images/product category/laptop.png"
import img2 from "../../../images/product category/console.png"
import img3 from "../../../images/product category/mobile.png"
import img4 from "../../../images/product category/cpu.png"

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            High-End Laptops
          </h1>
          <p> Exculsive on DigiShop</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            Console's Available
          </h1>
          <p> At Lowest Price</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            Easy EMI on Mobiles
          </h1>
          <p> </p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Custom Tower's 
          </h1>
          <p> At Affordable Price</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories