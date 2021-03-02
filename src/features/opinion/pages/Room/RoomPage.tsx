import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { closeOutline, saveOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface Params {
  idRoom: string;
}

const RoomPage: React.FC = () => {
  const { idRoom } = useParams<Params>();
  const { register, handleSubmit, watch, errors } = useForm();
  const [isHumid, setIsHumid] = useState(false);
  const [haveWindow, setHaveWindow] = useState(false);
  const [puffyWindowOnRain, setPuffyWindowOnRain] = useState(false);
  const [fromLight, setFromLight] = useState('09:00');
  const [toLight, setToLight] = useState('10:00');
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const submitRef = useRef<HTMLIonButtonElement>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/tabs/feed' />
            <IonTitle> Nueva Habitacion </IonTitle>
          </IonButtons>

          <IonButtons slot='end'>
            <IonButton onClick={() => submitRef.current!.click()}>
              <IonIcon
                size='small'
                className='ion-margin ion-justify-content-center'
                icon={saveOutline}
              />
            </IonButton>
            <IonButton>
              <IonIcon
                size='small'
                className='ion-margin ion-justify-content-center'
                icon={closeOutline}
                onClick={() => {}}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Habitacion</IonLabel>
                  <IonInput
                    placeholder='Pieza, Living...'
                    name='idTitle'
                    id='idTitle'
                    type='text'
                    ref={register}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>¿ Tiene Humedad ?</IonLabel>
                  <IonToggle
                    id='id-isHumid'
                    checked={isHumid}
                    onIonChange={(e) => setIsHumid(e.detail.checked)}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            {isHumid && (
              <IonRow>
                <IonCol className='ion-text-center'>
                  <IonList>
                    <IonListHeader>
                      <IonLabel>Lugar Humedad</IonLabel>
                    </IonListHeader>
                    <IonRadioGroup
                      allowEmptySelection
                      value={selected1}
                      onIonChange={(e) => setSelected1(e.detail.value)}
                    >
                      <IonItem>
                        <IonLabel>Techo</IonLabel>
                        <IonRadio name='humidity' slot='start' value='biff' />
                      </IonItem>
                    </IonRadioGroup>
                    <IonRadioGroup
                      allowEmptySelection
                      value={selected2}
                      onIonChange={(e) => setSelected2(e.detail.value)}
                    >
                      <IonItem>
                        <IonLabel>Paredes</IonLabel>
                        <IonRadio name='humidity' slot='start' value='griff' />
                      </IonItem>
                    </IonRadioGroup>
                    <IonRadioGroup
                      allowEmptySelection
                      value={selected3}
                      onIonChange={(e) => setSelected3(e.detail.value)}
                    >
                      <IonItem>
                        <IonLabel>Piso</IonLabel>
                        <IonRadio name='humidity' slot='start' value='buford' />
                      </IonItem>
                    </IonRadioGroup>
                  </IonList>
                </IonCol>
              </IonRow>
            )}
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>¿ Tiene Ventanas ?</IonLabel>
                  <IonToggle
                    id='id-isHumid'
                    checked={haveWindow}
                    onIonChange={(e) => setHaveWindow(e.detail.checked)}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            {haveWindow && (
              <>
                <IonRow>
                  <IonCol className='ion-text-center'>
                    <IonLabel>Luz Natural</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow className='ion-justify-content-between'>
                  <IonCol>
                    <IonItem className='ion-text-center'>
                      <IonLabel position='stacked'>Desde</IonLabel>
                      <IonDatetime
                        displayFormat='HH:mm'
                        value={fromLight}
                        onIonChange={(e) => setFromLight(e.detail.value!)}
                      />
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem className='ion-text-center'>
                      <IonLabel position='floating'>Hasta</IonLabel>
                      <IonDatetime
                        displayFormat='HH:mm'
                        value={toLight}
                        onIonChange={(e) => setToLight(e.detail.value!)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel>¿ Se hinchan cuando llueve ?</IonLabel>
                      <IonToggle
                        id='id-puffyWindow'
                        checked={puffyWindowOnRain}
                        onIonChange={(e) =>
                          setPuffyWindowOnRain(e.detail.checked)
                        }
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </>
            )}
          </IonGrid>
        </form>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            ref={submitRef}
            onClick={handleSubmit(onSubmit)}
            expand='block'
            type='submit'
          >
            LISTO
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default RoomPage;
