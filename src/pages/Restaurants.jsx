import React from 'react';
import Page from '../containers/Page'; 
/* this would get replaced with a call from to a database */
import inception from '../assets/inception.jpeg' 

const Restaurants = () => {
  
  // mock of API return
  const cards = [
    { title: 'Inception', categories: ['Thriller', 'Action'], platform: 'Netflix', runtime: '2h5m', image: inception, description: 'Mind Fuckery' },
    /* tried to add another lot of photos to be used need to learn to intergrate a database and use that instead of this saved photos */ 
  ];
  
  return (
    <Page title="Restaurants" contentTitle="Find Resturant">
      <Deck cards={cards} />
    </Page>
  );
};

export default Restaurants;
