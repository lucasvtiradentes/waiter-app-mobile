import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: ${isAndroid ? '5px' : '16'} 24px ;
`;

const FooterContainer = styled.SafeAreaView`
`;

export { FooterContainer, Footer };
