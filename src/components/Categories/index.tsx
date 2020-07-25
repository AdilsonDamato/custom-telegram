import React from 'react';

import { Wrapper, Container, Category, Text } from './styles';

const Categories: React.FC = () => {
  return (
    <Wrapper>
      <Container>

        <Category>
          <Text>All</Text>
        </Category>

        <Category active>
          <Text active>Important</Text>
        </Category>

        <Category>
          <Text>Unread</Text>
        </Category>

        <Category>
          <Text>Read</Text>
        </Category>

      </Container>
    </Wrapper>
  )
}

export default Categories;
