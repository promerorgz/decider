import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { restaurantOutline, filmOutline, triangle } from 'ionicons/icons';
import { Movies, Restaurants, Something } from './pages';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const tabs = [
  { tab: 'movies', href: '/movies', icon: filmOutline, name: 'Movies', exact: true, component: Movies },
  { tab: 'restaurants', href: '/restaurants', icon: restaurantOutline, name: 'Restaurants', exact: true, component: Restaurants },
  { tab: 'x', href: '/something', icon: triangle, name: 'X', exact: true, component: Something },
];



const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {tabs.map(({ tab, href, component, exact }, i) => {
            return (<Route key={`${tab}-${i}`} path={href} component={component} exact={exact} />)
          })}
          <Route path="/" render={() => <Redirect to="/movies" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {
            tabs.map(({ tab, href, icon, name }, i) => (
              <IonTabButton key={`${tab}-${i}`} tab={tab} href={href}>
                <IonIcon icon={icon} />
                <IonLabel>{name}</IonLabel>
              </IonTabButton>
            ))
          }
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
