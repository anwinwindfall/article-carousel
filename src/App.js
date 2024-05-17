import React from 'react';
import './App.scss';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';
import Carousel from './components/Carousel/Carousel';
import './components/Carousel/Carousel.scss';


function App({ moduleData }) {
  console.log(moduleData.cards);
  return (
    <div className="sw-article-carousel__container">
      <div class="card-section">
        <p>{moduleData.heading}</p>
        
        <Carousel items={moduleData.cards} type={moduleData.card_type} />
       
      </div>
    </div>
  );
}

export default App;
