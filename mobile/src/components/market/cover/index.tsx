import { IconArrowLeft } from '@tabler/icons-react-native';
import { ImageBackground, View } from 'react-native';

import { router } from 'expo-router';

import { Button } from '@/components/button';
import styles from './styles';

type Props = {
  uri: string;
};

export default function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
