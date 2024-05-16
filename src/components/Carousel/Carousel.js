import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import React from 'react'

const Carousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }
    return (
        <div>Carousel</div>
    )
}

export default Carousel