import { useCallback, useEffect, useState } from 'react';
import { apiSendSms } from 'src/services/api.services';
import useAppNavigation from './useAppNavigation';
import BackgroundTimer from 'react-native-background-timer-android';

let timeout: number;

const setTimeoutFn = BackgroundTimer.setTimeout;
const clearTimeoutFn = BackgroundTimer.clearTimeout;

const useSmsSend = (phone: string) => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [wait, setWait] = useState(0);

   const { navigate } = useAppNavigation();

   useEffect(() => {
      timeout = setTimeoutFn(() => {
         if (wait === 0) {
            clearTimeoutFn(timeout);
            return;
         }
         setWait((prev) => prev - 1);
      }, 1000);
   }, [wait]);

   const sendSms = useCallback(async () => {
      setLoading(true);
      setError('');
      try {
         const response = await apiSendSms(phone);
         const isCreated: boolean = response.data.is_created;
         navigate('confirmPhoneNumber', { phone, isCreated });
      } catch (e) {
         if (typeof e === 'number') {
            setWait(Math.ceil(e));
         } else {
            setError(e as string);
         }
      } finally {
         setLoading(false);
      }
   }, [phone]);

   return { sendSms, wait, loading, error };
};

export default useSmsSend;
