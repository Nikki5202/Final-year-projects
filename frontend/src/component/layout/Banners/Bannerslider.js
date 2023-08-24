import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://www.evetech.co.za/repository/ProductImages/intel-rtx-3080-gaming-laptops-banner-980px-v1.jpg',
            title: 'New Arrival',
            description: 'Unleash the beast',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://cache.tradeinn.com/images/brand-page/banner_4728_16.jpg',
            title: 'Console',
            description: 'At lowest Price',
            button: 'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider