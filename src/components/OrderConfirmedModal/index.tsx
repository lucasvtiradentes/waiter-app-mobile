import { Text } from '../../utils/Text';
import { Button } from '../Button';
import { ModalBody } from './styles';
import { Modal } from 'react-native';
import { CheckCircle } from '../../assets/Icons/CheckCircle';

interface propsType {
  visible: boolean;
  onOk: () => void;
}

const OrderConfirmedModal = ({visible, onOk}: propsType) => {
  if (!visible){ return null;}

  return (
    <Modal visible={visible} animationType='slide' presentationStyle='pageSheet' onRequestClose={onOk}>
      <ModalBody>
        <CheckCircle />
        <Text weight='600' color="#fff">Pedido confirmado!</Text>
        <Text color="#fff" style={{marginBottom: 15}}>O pedido já entrou na fila de produção.</Text>
        <Button type="secondary" onPress={onOk}>Ok</Button>
      </ModalBody>
    </ Modal>
  );
};

export { OrderConfirmedModal };
