import styled from 'styled-components/native';

interface propsDescription {
  unread?: boolean;
}

export const Container = styled.ScrollView.attrs(() => ({
  vertical: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  }
}))``;

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 359px;
  margin-bottom: 28px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 82px;
  height: 82px;
  border-radius: 30px;
  margin-right: 15px;
`;

export const Online = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 30px;
  border: 5px solid #fff;
  background: #2675EC;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Information = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.theme.color };
`;

export const Description = styled.Text<propsDescription>`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.unread ? '#2675EC' : '#848484'};
`;

export const Time = styled.View`
  align-items: flex-end;
`;

export const TimeHour = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #848484;
`;

export const TimeLabel = styled.View`
  width: 44px;
  height: 26px;
  background: #2675EC;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

export const TimeText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;

export const ViewMessage = styled.Image`
  margin-top: 12px;
`;

