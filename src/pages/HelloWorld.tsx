import React from 'react';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import styles from './HelloWorld.module.scss';

const HelloWorld: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              <IonItem
                className={[styles.colorRojo, '--ion-padding'].join(' ')}
              >
                Hello World
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HelloWorld;
