import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <GlobalStyles />
            <div>
              <Header />
              <main>
                <Routes />
              </main>
            </div>
            <ScrollToTop />
          </>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
