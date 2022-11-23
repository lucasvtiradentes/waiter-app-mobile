import styled from 'styled-components/native';
import { APP_MAIN_COLOR } from '../../configs/configs';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({disabled}) => disabled ? '#999' : APP_MAIN_COLOR};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;

export { ButtonContainer };
