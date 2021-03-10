import React, { useEffect, useState } from 'react';
import Deck from '../components/Deck';
import Page from '../containers/Page';
// import inception from '../assets/inception.jpeg'
// import grownups from '../assets/grownups.jpeg'
// import creed2 from '../assets/creed2.jpg'
// import endgame from '../assets/endgame.jpeg'
// import jurassic from '../assets/Jurassic_Park_poster.jpg'
import { db } from '../services/Firebase'

// const cards = [
//   { title: 'Tonys on top', categories: ['bar'], location: '', runtime: '$$', image: inception, description: 'Mind Fuckery' },
//   { title: 'Columbos', categories: ['Comedy'], location: '', runtime: '$', image: grownups, description: 'Adam Sandler and Friends' },
//   { title: 'salt and smoke', categories: ['BQQ'], location: '', runtime: '$$$', image: endgame, description: 'Fuck Thanos' },
//   { title: 'bufflo wild wings', categories: ['Dinner'], location: '', runtime: '$$', image: creed2, description: 'Rockys son' },
//   { title: 'citizen canes', categories: ['fast food'], location: '', runtime: '$', image: jurassic, description: '6ft chickens' },
// ];

// const Restaurants = () => {
//   return (
//     <Page title="Restaurants">
//       <Deck cards={cards}></Deck>
//     </Page>
//   );
// };
const Restaurants = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([])
  useEffect(() => {
    db.collection('Restaurants').get()
      .then(snapshot => {
        const RestaurantinfoConstant = []
        snapshot.forEach(doc => {
          const data = doc.data()
          RestaurantinfoConstant.push(data)
        })
        setRestaurantInfo(RestaurantinfoConstant)
      })
  }, [])
  console.log({ restaurantInfo })

  return (
    <Page title="Restaurant" contentTitle="Find Restaurant">
      <Deck cards={restaurantInfo} />
    </Page>
  );
};

export default Restaurants;
