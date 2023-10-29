import { useCallback, useState } from 'react';
import { apiAddPhotos } from 'src/services/api.services';

const useAddPhotos = (pictures: string[]) => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const addPhotos = useCallback(async () => {
      try {
         setLoading(true);
         setError('');

         await apiAddPhotos(pictures);
      } catch (e) {
         setError(e as string);
      } finally {
         setLoading(false);
      }
   }, [pictures]);

   return { addPhotos, loading, error };
};

export default useAddPhotos;
