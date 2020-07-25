import styled from 'styled-components/native';

interface propsCategory {
  active?: boolean;
}

export const Wrapper = styled.View`
  height: 120px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 5,
  }
}))``;

export const Category = styled.TouchableOpacity<propsCategory>`
  background: ${props => props.active ? '#2675EC' : 'transparent'};
  border-radius: 20px;
  padding: 13px 20px;
  margin: 0 10px;
`;

export const Text = styled.Text<propsCategory>`
  color: ${props => props.active ? '#fff' : props.theme.color };
  font-size: 20px;
  font-weight: 600;
`;
