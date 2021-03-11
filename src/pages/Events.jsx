import React, { useEffect, useState } from 'react';
import Deck from '../components/Deck';
import Page from '../containers/Page';
import { db } from '../services/Firebase'

const Events = () => {
  const [eventInfo, setEventInfo] = useState([])
  useEffect(() => {
    db.collection('Events').get()
      .then(snapshot => {
        const EventinfoConstant = []
        snapshot.forEach(doc => {
          const data = doc.data()
          EventinfoConstant.push(data)
        })
        setEventInfo(EventinfoConstant)
      })
  }, [])
  console.log({ eventInfo })

  // mock of API return
  // const cards = [
  //   { title: Movieinfo.title, categories: ['Thriller', 'Action'], location: 'Netflix', runtime: '2h5m', image: inception, description: 'Mind Fuckery' },
  //   { title: 'Grown Ups', categories: ['Comedy'], location: 'Netflix', runtime: '1h45m', image: grownups, description: 'Adam Sandler and Friends' },
  //   { title: 'Avengers: Endgame', categories: ['Superhero', 'Action'], location: 'Disney', runtime: '2h5m', image: endgame, description: 'Fuck Thanos' },
  //   { title: 'Creed II', categories: ['Drama', 'Action'], location: 'Hulu', runtime: '2h12m', image: creed2, description: 'Rockys son' },
  //   { title: 'Jurassic Park', categories: ['Thriller', 'Action'], location: 'Netflix', runtime: '2h5m', image: jurassic, description: '6ft chickens' },
  // ];

  return (
    <Page title="Events" contentTitle="Find Events">
      <Deck cards={eventInfo} iconType={"events"} />
    </Page>
  );
};

export default Events;
