import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { closeOutline, saveOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import styles from './OpinionPage.module.scss';

import HardDataSlide from '../components/HardDataSlide/HardDataSlide';
import SoftDataSlide from '../components/SoftDataSlide/SoftDataSlide';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const OpinionPage: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>{t('opinion.title')}</IonTitle> */}
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/tabs/feed' />
            <IonTitle> Nueva Opinion </IonTitle>
          </IonButtons>

          <IonButtons slot='end'>
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={saveOutline}
              onClick={() => {}}
            />
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={closeOutline}
              onClick={() => {}}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides className={styles.root} pager options={slideOpts}>
          <HardDataSlide />
          <SoftDataSlide />
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default OpinionPage;
