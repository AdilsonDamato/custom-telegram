import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background };
`;

export const ContentText = styled.Text`
  color: ${props => props.theme.color };
`;
