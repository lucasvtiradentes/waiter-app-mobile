import styled from 'styled-components/native';

const Container = styled.View`
  margin: 24px 24px 0;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.View`
  padding: 16px;
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  margin-top: 24px;
`;

export { Container, Content, Table };
