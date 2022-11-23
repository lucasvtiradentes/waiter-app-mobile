import { APP_MAIN_COLOR } from '../../configs/configs';
import { Text } from '../../utils/Text';
import { ButtonContainer } from './styles';

interface propsType {
  children: string;
  disabled?: boolean;
  onPress: () => void;
  type?: 'primary' | 'secondary';
}

const Button = ({onPress, children, disabled, type}: propsType) => {

  const backgroundColor = type === 'secondary' ? '#fff' : APP_MAIN_COLOR;
  const textColor = type === 'secondary' ? APP_MAIN_COLOR : '#fff';

  return (
    <ButtonContainer style={{backgroundColor: backgroundColor}} onPress={onPress} disabled={disabled} >
      <Text weight='600' color={textColor}>{children}</Text>
    </ButtonContainer>
  );
};

export { Button };
