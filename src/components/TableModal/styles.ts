import styled from 'styled-components/native';

const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ModalForm = styled.View`
  margin-top: 32px;
`;

const FormInput = styled.TextInput`
  background-color: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px ;
`;

const ModalBody = styled.View`
  background-color: #fafafa;
  border-radius: 8px;
  width: 100%;
  padding: 24px;
`;

export { Overlay, ModalBody, ModalHeader, ModalForm, FormInput  };
