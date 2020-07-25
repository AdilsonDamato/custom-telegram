import React from 'react';

import {
  Container,
  Message,
  Content,
  Avatar,
  Information,
  Name,
  Description,
  Time,
  TimeHour,
  TimeLabel,
  TimeText,
  ViewMessage,
  Online,
} from './styles';

import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';
import avatar3 from '../../assets/avatar-3.png';
import avatar4 from '../../assets/avatar-4.png';
import avatar5 from '../../assets/avatar-5.png';
import avatar6 from '../../assets/avatar-6.png';

import view_message from '../../assets/view-message.png';
import no_view_message from '../../assets/no-view-message.png';

const Messages: React.FC = () => {
  return (
    <Container>

      <Message>
        <Content>
          <Avatar source={avatar1} />
          <Information>
            <Name>Theresa Webb</Name>
            <Description unread>Why did you do that?</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>15:20</TimeHour>
          <TimeLabel>
            <TimeText>2</TimeText>
          </TimeLabel>
        </Time>
      </Message>

      <Message>
        <Content>
          <Avatar source={avatar2} />
          <Online />
          <Information>
            <Name>Calvin Flores</Name>
            <Description unread>Hi, bro! Come to my house!</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>15:13</TimeHour>
          <TimeLabel>
            <TimeText>3</TimeText>
          </TimeLabel>
        </Time>
      </Message>

      <Message>
        <Content>
          <Avatar source={avatar4} />
          <Information>
            <Name>Gregory Bell</Name>
            <Description unread>Will you stop ignoring me?</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>15:13</TimeHour>
          <TimeLabel>
            <TimeText>100</TimeText>
          </TimeLabel>
        </Time>
      </Message>

      <Message>
        <Content>
          <Avatar source={avatar3} />
          <Information>
            <Name>Soham Henry</Name>
            <Description>Me: Bro, just fuck off</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>8:30</TimeHour>
          <ViewMessage source={view_message} />
        </Time>
      </Message>

      <Message>
        <Content>
          <Avatar source={avatar5} />
          <Online />
          <Information>
            <Name>Mother</Name>
            <Description>Me: Yes, of course come, ...</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>7:20</TimeHour>
          <ViewMessage source={no_view_message} />
        </Time>
      </Message>

      <Message>
        <Content>
          <Avatar source={avatar6} />
          <Information>
            <Name>Brother</Name>
            <Description>Ok. Good bay!</Description>
          </Information>
        </Content>
        <Time>
          <TimeHour>Yesterday</TimeHour>
        </Time>
      </Message>

    </Container>
  );
}

export default Messages;
