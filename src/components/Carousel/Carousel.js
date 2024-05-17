import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import React from 'react'
import CardOne from '../Cards/CardOne';
import CardTwo from '../Cards/CardTwo';
import './Carousel.scss'

const Carousel = ({items, type}) => {
    const width=window.innerWidth
    const numberOfCards=width/230
    // const responsive_1 = {
    //     0: { items: 1 },
    //     275: { items: 1.1 },
    //     320: { items: 1.2 },
    //     365: { items: 1.4 },
    //     400: { items: 1.6 },
    //     450: { items: 1.8 },
    //     520: { items: 2 },
    //     570: { items: 2.3 },
    //     630: { items: 2.6 },
    //     700: { items: 3 },
    //     840: { items: 3.3 },
    //     900: { items: 3.5 },
    //     1024: { items: 3 },
    // }
    // The card components are loaded into the item variable, then to be passed into carousel items
    const item=items.map((items)=>{
        if(type=='card_one'){
            return <CardOne title={items.title} subTitle={items.sub_title} image={items.card_image} link={items.url}/>
        }
        else if(type=='card_two'){
            return <CardTwo title={items.title} subTitle={items.sub_title} image={items.card_image} link={items.url}/>
        }
    })
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    return (
        <div>
            <AliceCarousel
            items={item}
            mouseTracking={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            autoWidth
            />
        </div>
    )
}

export default Carousel