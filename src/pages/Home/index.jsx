import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Todos } from './Todos';


export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todos App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <Todos />

      </IonContent>
    </IonPage>
  );
};


