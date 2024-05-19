import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import React, { useRef, useState } from 'react'
import CardOne from '../Cards/CardOne';
import CardTwo from '../Cards/CardTwo';
import './Carousel.scss'
import leftangle from '../../images/leftangle.svg';
import rightangle from '../../images/rightangle.svg';

const Carousel = ({ items, type }) => {
    const carouselRef= useRef(null)
    const [currentIndex, setCurrentIndex]= useState(0)
    const screenWidth = window.innerWidth
    const numberOfCards = type=='card_one'?Math.floor(screenWidth / 230):Math.ceil(screenWidth/278)
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
            <div className='arrow-l'>
                <img src={leftangle} />
            </div>
            <AliceCarousel
            items={item}
            mouseTracking={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            autoWidth
            ref={carouselRef}
            onSlideChanged={handleSlideChange}
            />
            <div className='arrow-r'>
                <img src={rightangle} />
            </div>
        </div>
    )
}

export default Carousel