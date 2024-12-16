import { IconProps } from '@tabler/icons-react-native';
import { Text, View } from 'react-native';

import { colors } from '@/styles/theme';
import styles from './styles';

type StepProps = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export default function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.detalis}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
