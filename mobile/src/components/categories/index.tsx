import { FlatList } from 'react-native';
import Category from '../category';
import styles from './styles';

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export default function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.content}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          IconId={item.id}
          isSelected={item.id === selected}
          onPress={() => onSelect(item.id)}
        />
      )}
    />
  );
}
