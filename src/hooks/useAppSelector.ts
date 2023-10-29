import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer } from 'src/store';

const useAppSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;

export default useAppSelector;
