import { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Close } from '../../assets/Icons/Close';
import { isAndroid } from '../../utils/isAndroid';
import { Text } from '../../utils/Text';
import { Button } from '../Button';
import { ModalBody, Overlay, ModalHeader, ModalForm, FormInput } from './styles';

interface propsType {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

const TableModal = ({visible, onClose, onSave}: propsType) => {

  const [table, setTable] = useState<string>('');
  const handleSave = () => {
    setTable('');
    onSave(table);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666"/>
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <FormInput onChangeText={setTable} keyboardType='number-pad' placeholder="Número da mesa" placeholderTextColor="#666"></FormInput>

            <Button onPress={handleSave} disabled={table.length === 0}>Salvar</Button>
          </ModalForm>

        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export { TableModal };
