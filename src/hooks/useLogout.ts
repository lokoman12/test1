import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiLogout } from 'src/services/api.services';
import { unsetQuestionnaireData } from 'src/store/reducers/questionnaireData.reducer';
import { unsetUserData } from 'src/store/reducers/user.reducer';
import useAppSelector from './useAppSelector';

const useLogout = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const refreshToken = useAppSelector((state) => state.user.data?.refreshToken)!;
   const dispatch = useDispatch();

   const logout = useCallback(async () => {
      setLoading(true);
      setError('');
      try {
         await apiLogout(refreshToken);
         dispatch(unsetUserData());
         dispatch(unsetQuestionnaireData());
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   }, []);

   return { logout, loading, error };
};

export default useLogout;
