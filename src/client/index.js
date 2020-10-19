import React from 'react';
import { hydrate } from 'react-dom';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';
import { BrowserRouter } from "react-router-dom";

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
    () => {
      const jssStyles = document.getElementById('jss-ssr');
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);
    }
);

if (module.hot) {
  module.hot.accept('../common/containers/App', () => {
    hydrate(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeProvider>
    </Provider>,
      document.getElementById('root')
    );
  });
}
