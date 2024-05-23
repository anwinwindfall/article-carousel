import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import React, { useRef, useState } from 'react'
import CardOne from '../Cards/CardOne';
import CardTwo from '../Cards/CardTwo';
import './Carousel.scss'
import leftangle from '../../images/leftangle.svg';
import rightangle from '../../images/rightangle.svg';

const Carousel = ({ items, type }) => {
    const responsive = {
        0: { items: 1 },
        420: { items: 1 },
        576: { items: 1 },
        768: { items: 1.4 },
        848: { items: 2.1 },  
        925: { items: 2.1 },
        1200: { items: 3 },
        1700: { items: 3.8 },
        2000: { items: 4 },
      };
    const carouselRef= useRef(null)
    const [currentIndex, setCurrentIndex]= useState(0)
    const screenWidth = window.innerWidth
    const numberOfCards = type=='card_one'?Math.floor(screenWidth / 230):Math.ceil(screenWidth / 278)
    function handleRightArrow(){
        
    }
    const slidePrev=()=>{
        if (carouselRef.current) {
          carouselRef.current.slidePrev();
        }
      }
      const slideNext=()=>{
        if (carouselRef.current) {
          carouselRef.current.slideNext();
        }
      }
      function handleSlideChange(index){
        setCurrentIndex(index.item);
      }
    
    // The card components are loaded into the item variable, then to be passed into carousel items
    const item = items.map((items) => {
        if (type == 'card_one') {
            return <CardOne title={items.title} subTitle={items.sub_title} image={items.card_image} link={items.url} />
        }
        else if (type == 'card_two') {
            return <CardTwo title={items.title} subTitle={items.sub_title} image={items.card_image} link={items.url} />
        }
    })
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    return (
        <div className='section-carousel-wrapper'>
            {!currentIndex==0&&<div className='arrow-l' onClick={slidePrev}>
                <img src={leftangle} />
            </div>}
            <AliceCarousel
            items={item}
            responsive={responsive}
            mouseTracking={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            activeIndex={currentIndex}
            autoWidth={true}
            ref={carouselRef}
            onSlideChanged={handleSlideChange}
            />
            {currentIndex<items.length-numberOfCards&&<div className='arrow-r' onClick={slideNext}>
                <img src={rightangle} />
            </div>}
            
        </div>
    )
}

export default Carousel