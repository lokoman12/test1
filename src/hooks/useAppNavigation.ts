import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/components/navigation/types';

const useAppNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>;

export default useAppNavigation;
