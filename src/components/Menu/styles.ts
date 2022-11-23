import styled from 'styled-components/native';

const MenuContainer = styled.View`
  flex: 1;
`;

const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

const ProductDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: rgba(204, 204, 204, 0.3);
`;

const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;


export { MenuContainer, Product, ProductImage, ProductDetails, Separator, AddToCartButton };
