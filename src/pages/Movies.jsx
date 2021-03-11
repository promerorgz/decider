import React, { useEffect, useState } from 'react';
import Deck from '../components/Deck';
import Page from '../containers/Page';
// import inception from '../assets/inception.jpeg'
// import grownups from '../assets/grownups.jpeg'
// import creed2 from '../assets/creed2.jpg'
// import endgame from '../assets/endgame.jpeg'
// import jurassic from '../assets/Jurassic_Park_poster.jpg'
import { db } from '../services/Firebase'

const Movies = () => {
  const [movieInfo, setMovieInfo] = useState([])
  useEffect(() => {
    db.collection('Movies').get()
      .then(snapshot => {
        const MovieinfoConstant = []
        snapshot.forEach(doc => {
          const data = doc.data()
          MovieinfoConstant.push(data)
        })
        setMovieInfo(MovieinfoConstant)
      })
  }, [])
  console.log({ movieInfo })

  // mock of API return
  // const cards = [
  //   { title: Movieinfo.title, categories: ['Thriller', 'Action'], location: 'Netflix', runtime: '2h5m', image: inception, description: 'Mind Fuckery' },
  //   { title: 'Grown Ups', categories: ['Comedy'], location: 'Netflix', runtime: '1h45m', image: grownups, description: 'Adam Sandler and Friends' },
  //   { title: 'Avengers: Endgame', categories: ['Superhero', 'Action'], location: 'Disney', runtime: '2h5m', image: endgame, description: 'Fuck Thanos' },
  //   { title: 'Creed II', categories: ['Drama', 'Action'], location: 'Hulu', runtime: '2h12m', image: creed2, description: 'Rockys son' },
  //   { title: 'Jurassic Park', categories: ['Thriller', 'Action'], location: 'Netflix', runtime: '2h5m', image: jurassic, description: '6ft chickens' },
  // ];

  return (
    <Page title="Movies" contentTitle="Find Movies">
      <Deck cards={movieInfo} iconType={"movies"} />
    </Page>
  );
};
//export const auth = firebase.auth();
//export const db = firebase.firestore();


export default Movies;



