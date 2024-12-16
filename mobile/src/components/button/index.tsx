import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { IconProps as TablerIconProps } from '@tabler/icons-react-native';

import { colors } from '@/styles/theme';
import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.conatainer, style]} disabled={isLoading} {...rest}>
      {isLoading ? <ActivityIndicator size={'small'} color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}> {children} </Text>;
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
