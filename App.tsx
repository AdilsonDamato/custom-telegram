import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './src/styles/themes';

import Layout from './src/components/Layout';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}
