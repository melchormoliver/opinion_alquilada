import styles from 'DetailPage.module.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons'
import React from 'react';
import {
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton
  } from '@ionic/react';
const DetailPage: React.FC = () => {
    return( <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>CardExamples</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Periodo</IonCardSubtitle>
              <IonCardTitle>20/20/2020</IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>Critica especial
        </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>ion-item in a card, icon left, button right</IonLabel>
              <IonButton fill="outline" slot="end">View</IonButton>
            </IonItem>
  
            <IonCardContent>
              This is content, without any paragraph or header tags,
              within an ion-cardContent element.
        </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonItem href="#" className="ion-activated">
              <IonIcon icon={wifi} slot="start" />
              <IonLabel>Card Link Item 1 activated</IonLabel>
            </IonItem>
  
            <IonItem href="#">
              <IonIcon icon={wine} slot="start" />
              <IonLabel>Card Link Item 2</IonLabel>
            </IonItem>
  
            <IonItem className="ion-activated">
              <IonIcon icon={warning} slot="start" />
              <IonLabel>Card Button Item 1 activated</IonLabel>
            </IonItem>
  
            <IonItem>
              <IonIcon icon={walk} slot="start" />
              <IonLabel>Card Button Item 2</IonLabel>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
