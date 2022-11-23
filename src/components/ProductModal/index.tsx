import { FlatList, Modal } from 'react-native';
import { Close } from '../../assets/Icons/Close';
import { API_IMAGE_URL } from '../../configs/configs';
import { IProduct } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../../utils/Text';
import { Button } from '../Button';

import {
  ProductImage,
  CloseButton,
  ModalBody,
  ProductInfo,
  ProductIngredients,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer
} from './styles';

interface propsTypes {
  visible: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const ProductModal = ({visible, onClose, product}: propsTypes) => {

  if (product === null){ return null;}

  return (
    <Modal visible={visible} animationType='slide' presentationStyle='pageSheet' onRequestClose={onClose}>
      <ProductImage source={{uri: `${API_IMAGE_URL}/${product.imagePath}`}}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ProductImage>

      <ModalBody>
        <ProductInfo>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{marginTop: 8}}>{product.description}</Text>
        </ProductInfo>

        {product.ingredients.length > 0 && (
          <ProductIngredients>
            <Text color="#666" weight="600">Ingredientes</Text>

            <FlatList
              style={{marginTop: 16}}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{marginLeft: 16}}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </ProductIngredients>
        )}

      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button disabled={false} onPress={() => alert('pika')}>Adicionar pedido</Button>
        </FooterContainer>
      </Footer>

    </ Modal>
  );
};

export { ProductModal };
