import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';
const initialHeight = `${isAndroid ? StatusBar.currentHeight : 0}px`;

const Container = styled.SafeAreaView`
  margin-top: ${initialHeight};
  background-color: #FAFAFA;
  flex: 1;
`;

const NoProdcuts = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export {
  Container,
  NoProdcuts
};
