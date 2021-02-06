import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
