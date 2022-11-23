import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

const Icon = styled.View`
  background-color: #FFF;
  width: 44px;
  height: 44px;
  border-radius: 22px;

  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 8px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;

export { CategoriesContainer, Category, Icon };
