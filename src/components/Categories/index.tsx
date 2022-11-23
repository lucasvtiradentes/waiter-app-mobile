import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../utils/Text';
import { Category, Icon } from './styles';

import { ICategory } from '../../types/Category';

interface propsTypes {
  categories: ICategory[];
  onSelectCategory: (categoryId: string) => void
}

const Categories = ({categories, onSelectCategory}: propsTypes) => {

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectedCategory = (selectedCategoryId: string) => {
    const category = selectedCategory === selectedCategoryId ? '' : selectedCategoryId;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 24}}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({item: category}) => {

        const isSelected = selectedCategory === category._id;
        return (
          <Category key={category._id} onPress={() => handleSelectedCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">{category.name}</Text>
          </Category>
        );
      }}
    />
  );
};

export { Categories };


