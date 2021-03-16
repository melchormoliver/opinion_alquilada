import React, { useState, useEffect } from 'react';
import { AxiosStatic } from 'axios';
import { IonButton, IonModal } from '@ionic/react';

const withErrorHandler = (
  WrappedComponent: React.ElementType,
  axios: AxiosStatic
) => {
  const wrapper: React.FC = (props) => {
    const [error, setError] = useState<{ message: string } | null>(null);

    const reqInterceptor = axios.interceptors.request.use(
      (req) => {
        if (axios.defaults.headers.common['Authorization']) {
          setError(null);
          return req;
        }
        throw { message: 'the token is not available' };
      },
      (err) => {
        setError(err.message);
        return Promise.reject(error);
      }
    );

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        const fallbackValue = [
          {
            userId: 'Not authorized',
            id: 'aerw15311sq',
            title: 'Please try     again',
            completed: false,
          },
        ];
        setError(err.message);
        return Promise.reject(fallbackValue);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <IonModal isOpen={error !== null}>
          {error && error!.message}
          <IonButton onClick={errorConfirmedHandler}>Close Modal</IonButton>
        </IonModal>
        <WrappedComponent {...props} />
      </>
    );
  };
  return wrapper;
};

export default withErrorHandler;
