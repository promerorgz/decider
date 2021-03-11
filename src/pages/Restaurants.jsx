import React, { useEffect, useState } from 'react';
import Deck from '../components/Deck';
import Page from '../containers/Page';
import { db } from '../services/Firebase'


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
      <Deck cards={restaurantInfo} iconType={"resturants"} />
    </Page>
  );
};

export default Restaurants;
