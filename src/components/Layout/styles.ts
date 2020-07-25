import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background };
  padding-top: ${Platform.OS === 'android' ? 25 : 0};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px;
  height: 50px;
`

export const Icons = styled.View`
  flex-direction: row;
`

export const Logo = styled.Image``

export const Button = styled.TouchableOpacity``

export const Plus = styled.Image``

export const Search = styled.Image`
  margin: 0 30px;
`

export const Menu = styled.Image``

export const Text = styled.Text``
