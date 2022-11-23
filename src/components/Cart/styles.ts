import styled from 'styled-components/native';

const Item = styled.View`
  padding: 8px 0;
`;

const ProductContainer = styled.View`
flex-direction: row;
`;

const QuantityContainer = styled.View`
  min-width: 20px;
  padding: 0 10px;
`;

const ProductInfo = styled.View`
  flex: 1;
`;

const ProductImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

const Actions = styled.View`
  flex-direction: row;
  /* justify-content: center; */
  justify-content: space-around;
  align-items: center;
  min-width: 60px;
`;

const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PriceContainer = styled.View`
`;

const CartItemsContainer = styled.TouchableOpacity`
  /* background-color: red; */
`;

const CartToogle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const CartToogleImage = styled.View`
  opacity: 0.5;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
`;

export {
  Item,
  ProductContainer,
  ProductImage,
  Actions,
  QuantityContainer,
  ProductInfo,
  Footer,
  FooterContainer,
  PriceContainer,
  CartItemsContainer,
  CartToogle,
  CartToogleImage
};
