import React from 'react';
import './App.scss';
import CardOne from './components/Cards/CardOne';
import CardTwo from './components/Cards/CardTwo';


function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="sw-article-carousel__container">
      <div class="card-section">
        <p>News</p>
        <CardOne />
      </div>
      <div class="card-section">
        <p>Read inspiring articles</p>
        <CardTwo />
      </div>
    </div>
  );
}

export default App;
