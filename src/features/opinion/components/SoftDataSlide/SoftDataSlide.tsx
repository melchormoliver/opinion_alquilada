import {
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSlide,
  IonTitle,
  IonToggle,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { closeCircle, heart, pin, close } from 'ionicons/icons';
import SelectableChips from '../SelectableChips/SelectableChips';
import OpinionService from '../../services/OpinionService';

const SoftDataSlide: React.FC = () => {
  const [luminoso, setLuminoso] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonTitle>Datos Blandos</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonTitle>Tipos de vecinos</IonTitle>
            <SelectableChips chips={OpinionService.getVecinoChips()} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonList>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => setSelected(e.detail.value)}
            >
              <IonListHeader>
                <IonLabel>Temperatura</IonLabel>
              </IonListHeader>

              <IonItem>
                <IonLabel>Caluroso</IonLabel>
                <IonRadio slot='start' value='caluroso' />
              </IonItem>

              <IonItem>
                <IonLabel>Templado</IonLabel>
                <IonRadio slot='start' value='templado' />
              </IonItem>

              <IonItem>
                <IonLabel>Fresco</IonLabel>
                <IonRadio slot='start' value='fresco' />
              </IonItem>
            </IonRadioGroup>
          </IonList>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default SoftDataSlide;
