import React from 'react';
import Deck from '../components/Deck';
import Page from '../containers/Page';
import inception from '../assets/inception.jpeg'
import grownups from '../assets/grownups.jpeg'
import creed2 from '../assets/creed2.jpg'
import endgame from '../assets/endgame.jpeg'
import jurassic from '../assets/Jurassic_Park_poster.jpg'

const Movies = () => {

  // mock of API return
  const cards = [
    { title: 'Inception', categories: ['Thriller', 'Action'], platform: 'Netflix', runtime: '2h5m', image: inception, description: 'Mind Fuckery' },
    { title: 'Grown Ups', categories: ['Comedy'], platform: 'Netflix', runtime: '1h45m', image: grownups, description: 'Adam Sandler and Friends' },
    { title: 'Avengers: Endgame', categories: ['Superhero', 'Action'], platform: 'Disney', runtime: '2h5m', image: endgame, description: 'Fuck Thanos' },
    { title: 'Creed II', categories: ['Drama', 'Action'], platform: 'Hulu', runtime: '2h12m', image: creed2, description: 'Rockys son' },
    { title: 'Jurassic Park', categories: ['Thriller', 'Action'], platform: 'Netflix', runtime: '2h5m', image: jurassic, description: '6ft chickens' },
  ];

  return (
    <Page title="Movies" contentTitle="Find Movies">
      <Deck cards={cards} />
    </Page>
  );
};

export default Movies;
