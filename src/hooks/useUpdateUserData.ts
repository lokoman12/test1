import { useCallback, useState } from 'react';
import { apiUpdateUserData } from 'src/services/api.services';
import { QuestionnaireData } from 'src/types';

const useUpdateUserData = (data: Partial<QuestionnaireData>) => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const updateUserData = useCallback(async () => {
      try {
         setLoading(true);
         setError('');

         await apiUpdateUserData(data);
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   }, [data]);

   return { updateUserData, loading, error };
};

export default useUpdateUserData;
