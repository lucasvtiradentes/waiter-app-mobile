import styled from 'styled-components/native';

const ProductImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  position: absolute;
  right: 16px;
  top: 16px;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.View`
  background: #fafafa ;
  flex: 1;
  padding: 32px 24px 0;
`;

const ProductInfo = styled.View`

`;

const ProductIngredients = styled.View`
  margin-top: 32px;
  flex: 1;
`;

const Ingredient = styled.View`
  flex-direction: row;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  margin-bottom: 4px;
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

export {
  ProductImage,
  CloseButton,
  ModalBody,
  ProductInfo,
  ProductIngredients,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer
};
