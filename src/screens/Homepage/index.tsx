import React from 'react';
import { View } from 'react-native';
import Button from 'src/components/ui/button';

import Typography from 'src/components/ui/typography';
import useAppSelector from 'src/hooks/useAppSelector';
import useLogout from 'src/hooks/useLogout';
import styles from './styles';
import { toCamel } from 'src/utils/case.utils';
import FastImage from 'react-native-fast-image';
import Padding from 'src/components/ui/padding';

const Homepage = () => {
  const { phone, photos } = useAppSelector((state) => state.user.data || {});

  const { logout, loading } = useLogout();

  return (
    <Padding centered>
      <View style={styles.content}>
        <Typography centered variant='bold-1' text='Вы успешно авторизовались и прошли анкету!' />
        {phone !== undefined && (
          <View>
            <Typography text='Номер телефона: ' />
            <Typography style={styles.phone} text={phone} />
          </View>
        )}

        {photos?.map(({ photo, photoMedium, id }) => (
          <FastImage key={id} style={styles.image} source={{ uri: photoMedium || photo }} />
        ))}
      </View>

      <Button disabled={loading} centeredContent onPress={logout} text='Выйти' />
    </Padding>
  );
};

export default Homepage;
