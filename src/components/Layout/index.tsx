import React from 'react';

import {
  Container,
  Header,
  Logo,
  Plus,
  Search,
  Menu,
  Icons,
  Text,
  Button,
} from './styles';

import Categories from '../Categories';
import Messages from '../Messages';

import logo from '../../assets/Telegram.png';
import plus from '../../assets/Plus.png';
import search from '../../assets/Search.png';
import menu from '../../assets/Menu.png';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo source={logo} />

        <Icons>
          <Button>
            <Plus source={plus} />
          </Button>
          <Button>
            <Search source={search} />
          </Button>
          <Button>
            <Menu source={menu} />
          </Button>
        </Icons>
      </Header>

      <Categories />

      <Messages />

    </Container>
  );
}

export default Layout;
