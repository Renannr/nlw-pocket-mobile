import { colors } from '@/styles/theme';
import { categoriesIcons } from '@/utils/categories-icons';
import { Pressable, PressableProps, Text } from 'react-native';
import styles from './styles';

type CategoryProps = PressableProps & {
  IconId: string;
  isSelected?: boolean;
  name: string;
};

export default function Category({ name, IconId, isSelected = false, ...rest }: CategoryProps) {
  const Icon = categoriesIcons[IconId];
  return (
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}> {name} </Text>
    </Pressable>
  );
}
