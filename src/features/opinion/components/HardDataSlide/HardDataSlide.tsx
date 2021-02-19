import {
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSlide,
  IonTitle,
  IonToggle,
} from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DescribableRoom from '../DescribableRoom/DescribableRoom';

import './HardDataSlide.module.scss';

const HardDataSlide: React.FC = () => {
  const [provincia, setProvincia] = useState<string>('');
  const [localidad, setLocalidad] = useState<string>('');
  const [calle, setCalle] = useState<string>('');
  const [monto, setMonto] = useState<number | undefined>(undefined);
  const [isLuminoso, setIsLuminoso] = useState<boolean>(false);
  const [isHumedo, setIsHumedo] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonTitle>{t('harddataslide.title')}</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Provincia</IonLabel>
              <IonInput
                value={provincia}
                onIonChange={(e) => setProvincia(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Localidad</IonLabel>
              <IonInput
                value={localidad}
                type='text'
                onIonChange={(e) => setLocalidad(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Calle</IonLabel>
              <IonInput
                value={calle}
                type='text'
                onIonChange={(e) => setCalle(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Monto</IonLabel>
              <IonInput
                value={monto}
                type='number'
                onIonChange={(e) => setMonto(+e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Luminoso</IonLabel>
              <IonToggle
                checked={isLuminoso}
                onIonChange={(e) => setIsLuminoso(e.detail.checked)}
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Humedo</IonLabel>
              <IonToggle
                checked={isHumedo}
                onIonChange={(e) => setIsHumedo(e.detail.checked)}
              />
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <DescribableRoom
              icon={home}
              title='Ultimos Cartuchos'
              items={['culi', 'ut', 'kawirpy']}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default HardDataSlide;