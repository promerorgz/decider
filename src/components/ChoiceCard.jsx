import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonToolbar,
  IonChip,
  IonIcon,
  IonButton,
  IonButtons,
  // IonImg,
  // IonTitle,
  // IonAvatar
} from '@ionic/react';
import { triangle, pinOutline, boatOutline as water, musicalNotesOutline as festival, footballOutline as sports } from 'ionicons/icons';
import React, { useEffect } from 'react';
import netflix from '../assets/iconfinder_64-netflix_4202092.svg'
import hulu from '../assets/icons8-hulu.svg'
import disney from '../assets/Disney+_logo.svg'
import amazonprime from '../assets/Amazon_Prime-Logo.wine.svg'
import { db } from '../services/Firebase';
//import resturantsicon from '../assets/restaurant-cutlery-symbol-of-a-cross.svg'


const ChoiceCard = ({ iconType, title, categories, description, img, location, runtime, direction, id }) => {

  const styles = {
    card: {
      zIndex: 40,
      width: '45vh',
      maxWidth: '300px',
      height: '80vh',
      maxHeight: '570px',
      willChange: 'transform',
      borderRadius: '10px',
    },
    img: {
      width: '100%',
      padding: 8,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center'

    }
  }

  const getIcons = (location) => {
    const movieIcons = {
      netflix,
      hulu,
      disney,
      amazonprime
    };

    const eventIcons = {
      sports,
      festival,
      water,
    };
    return iconType === "resturants" ? pinOutline : iconType === "movies" ? movieIcons[location] : eventIcons[description];
  };

  useEffect(() => {
    if (direction === 1) {
      db.collection('users').doc('/wwULkByE1rqi4CWN1l6O').update({ likes: { ...['likes'], [iconType]: [...[iconType], id.id] } }) //this.id when login works.
    }
  }, [direction])


  return (
    <IonCard style={styles.card}>
      <IonCardHeader>
        <IonToolbar>
          <IonCardTitle>{title || 'Movie Title'}</IonCardTitle>
          <IonCardSubtitle size="small">{runtime}</IonCardSubtitle>
          <IonButtons slot="end">
            <IonButton slot="end">
              <IonIcon slot="icon-only" src={getIcons(location)} icon={getIcons(location)} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {categories.map((cat, i) => <IonChip key={`${cat}-${i}`}>{cat}</IonChip>) || 'Categories'}

      </IonCardHeader>
      <IonCardContent>
        <div style={styles.img}><img height="350px" width="auto" src={img || triangle} alt={`${title}-img`} /></div>
        <div style={{ textAlign: 'center' }}>{description}</div>
      </IonCardContent>
    </IonCard>
  )
}

export default ChoiceCard
