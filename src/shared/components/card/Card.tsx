import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
} from '@ionic/react';
import styles from './Card.module.scss';
interface CardProps {
  title: string;
  content: string;
  imgsrc: string;
}

const Card: React.FC<CardProps> = ({ title, content, imgsrc }) => {
  return (
    <IonCard>
      <IonGrid>
        <IonRow>
          <IonCol size='3'>
            <IonImg className={styles.image} src={imgsrc} />
          </IonCol>
          <IonCol size='9'>
            <IonCardHeader>
              <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{content}</IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default Card;
