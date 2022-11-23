import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { MinusCircle } from '../../assets/Icons/MinusCircle';
import { PlusCircle } from '../../assets/Icons/PlusCircle';
import { ShowLess } from '../../assets/Icons/ShowLess';
import { ShowMore } from '../../assets/Icons/ShowMore';
import { API_IMAGE_URL } from '../../configs/configs';
import { ICartItem } from '../../types/CartItem';
import { api } from '../../utils/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../../utils/Text';
import { Button } from '../Button';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import {
  Item,
  Actions,
  ProductContainer,
  ProductImage,
  QuantityContainer,
  ProductInfo,
  Footer,
  FooterContainer,
  PriceContainer,
  CartItemsContainer,
  CartToogle,
  CartToogleImage
} from './styles';

interface propsType {
  cartItems: ICartItem[];
  changeQuantityFn: (cartItem: ICartItem, qnt: number) => void
  selectedTable: string;
  onConfirmedOrder: () => void;
}

const Cart = ({cartItems, changeQuantityFn, selectedTable, onConfirmedOrder}: propsType) => {

  const [cartResumeVisible, setCartResumeVisible] = useState(false);
  const [isConfirmOrderModalVisible, setIsConfirmOrderModalVisible] = useState(false);

  const handleToogleCartResume = () => {
    setCartResumeVisible(oldValue => !oldValue);
  };

  const handleConfirmOrder = async () => {
    await api.post('/orders', {
      table: selectedTable,
      products: cartItems.map(item => {
        return {
          product: item.product._id,
          quantity: item.quantity
        };
      })
    });
    setIsConfirmOrderModalVisible(true);
  };


  return (
    <>

      <OrderConfirmedModal
        visible={isConfirmOrderModalVisible}
        onOk={onConfirmedOrder}
      />

      <CartItemsContainer>

        <CartToogle onPress={handleToogleCartResume}>
          <CartToogleImage>
            {cartResumeVisible ? (
              <ShowLess />
            ) : (
              <>
                <ShowMore />
                <Text>Ver os itens ({cartItems.length})</Text>
              </>
            )}
          </CartToogleImage>
        </CartToogle>

        {cartResumeVisible && (
          <FlatList
            data={cartItems}
            keyExtractor={cartItem => cartItem.product._id}
            showsVerticalScrollIndicator={false}
            renderItem={({item: cartItem}) => (
              <Item>
                <ProductContainer>
                  <ProductImage source={{uri: `${API_IMAGE_URL}/${cartItem.product.imagePath}`}}></ProductImage>
                  <QuantityContainer>
                    <Text size={14} color="#666">{cartItem.quantity}x</Text>
                  </QuantityContainer>
                  <ProductInfo>
                    <Text weight='600'>{cartItem.product.name}</Text>
                    <Text color="#666" style={{marginTop: 4}}>{formatCurrency(cartItem.product.price)}</Text>
                  </ProductInfo>
                  <Actions>
                    <TouchableOpacity onPress={() => changeQuantityFn(cartItem, -1)}><MinusCircle /></TouchableOpacity>
                    <TouchableOpacity onPress={() => changeQuantityFn(cartItem, 1)}><PlusCircle /></TouchableOpacity>
                  </Actions>
                </ProductContainer>
              </Item>
            )}
          />
        )}

      </CartItemsContainer>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Total</Text>
            <Text size={20} weight="600">{formatCurrency(cartItems.reduce((acc, cur) => acc + (cur.product.price * cur.quantity), 0))}</Text>
          </PriceContainer>
          <Button onPress={handleConfirmOrder}>Confirmar pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
};

export { Cart };
