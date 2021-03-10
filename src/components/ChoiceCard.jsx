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
import { triangle } from 'ionicons/icons';
import React from 'react';
import netflix from '../assets/iconfinder_64-netflix_4202092.svg'
import hulu from '../assets/icons8-hulu.svg'
import disney from '../assets/Disney+_logo.svg'

const ChoiceCard = ({ title, categories, description, img, location, runtime }) => {

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

  const icons = {
    netflix,
    hulu,
    disney,
    undefined: ''
  }

  console.log(icons[location.toLowerCase()])
  return (
    <IonCard style={styles.card}>
      <IonCardHeader>
        <IonToolbar>
          <IonCardTitle>{title || 'Movie Title'}</IonCardTitle>
          <IonCardSubtitle size="small">{runtime}</IonCardSubtitle>
          <IonButtons slot="end">
            <IonButton slot="end">
              <IonIcon slot="icon-only" src={icons[location.toLowerCase()]} alt={`${location}`} />
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
