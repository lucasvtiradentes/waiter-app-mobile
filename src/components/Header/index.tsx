import { TouchableOpacity } from 'react-native';
import { APP_MAIN_COLOR } from '../../configs/configs';
import { Text } from '../../utils/Text';
import { Container, Content, Table } from './styles';

interface propsType {
  selectedTable: string;
  onCancel: () => void
}

const Header = ({selectedTable, onCancel}: propsType) => {
  return (
    <Container>
      {selectedTable ? (
        <>
          <Content>
            <Text size={24} weight="600">Pedido</Text>
            <TouchableOpacity onPress={onCancel}>
              <Text size={14} weight="600" color={APP_MAIN_COLOR}>Cancelar pedido</Text>
            </TouchableOpacity>
          </Content>

          <Table>
            <Text color="##666">Mesa {selectedTable}</Text>
          </Table>
        </>
      ) : (
        <>
          <Text size={14} opacity={0.9}>Bem vindo(a) ao </Text>
          <Text size={24} weight="700">WAITER<Text size={24}>APP</Text></Text>
        </>
      )}
    </Container>
  );
};

export { Header };
