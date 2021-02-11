import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader lines='inset'>
            <IonLabel>Trending</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel color='primary'>
              <h1>harry styles</h1>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color='primary'>
              <h1>christmas</h1>
            </IonLabel>
          </IonItem>
          <IonItem lines='none'>
            <IonLabel color='primary'>
              <h1>falling</h1>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
