import React from 'react'
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import './styles.css';

const Page = ({ title, children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title || 'Tab'}</IonTitle>
          {/* <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title || 'Content Title'}</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          {children}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Page
