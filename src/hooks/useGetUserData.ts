import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetUserData } from 'src/services/api.services';
import { setUserData } from 'src/store/reducers/user.reducer';
import { User } from 'src/types';

const useGetUserData = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const dispatch = useDispatch();

   const getUserData = useCallback(async () => {
      setLoading(true);
      setError('');
      try {
         const response = await apiGetUserData();
         dispatch(setUserData(response.data));
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   }, []);

   return { getUserData, loading, error };
};

export default useGetUserData;
