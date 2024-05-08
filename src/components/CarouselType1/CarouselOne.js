import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const CarouselOne = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }
  return (
    <AliceCarousel
    responsive={responsive}
    />
  )
}

export default CarouselOne