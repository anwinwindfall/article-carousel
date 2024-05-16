import React from 'react';
import './App.scss';
import CardOne from './components/Cards/CardOne';


function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="sw-article-carousel">
      <CardOne/>
    </div>
  );
}

export default App;
