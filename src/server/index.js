import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import express from 'express';
import { fetchCounter } from '../common/api/counter';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import theme from '../theme';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchCounter(apiResult => {
      const sheets = new ServerStyleSheets();
      const params = qs.parse(req.query);
      const counter = parseInt(params.counter, 10) || apiResult || 0;
      const preloadedState = { counter };
      const store = configureStore(preloadedState);
      const context = {};
      const markup = renderToString(
         sheets.collect(
           <Provider store={store}>
            <ThemeProvider theme={theme}>
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            </ThemeProvider>
          </Provider>
      ));
   const css = sheets.toString();
      const finalState = store.getState();
      const html = `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>Times Foodie</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''}
                ${css ? `<style id='jss-ssr'>${css}</style>` : ''}
                ${process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`}
          </head>
          <body>
              <div id="root">${markup}</div>
              <script>
                window.__PRELOADED_STATE__ = ${serialize(finalState)}
              </script>
          </body>
      </html>`
 if (context.url) {
   // Somewhere a `<Redirect>` was rendered
   return res.redirect(301, context.url);
 }

 res.send(html);
    });
  });

export default server;



// export const renderApp = (req, res) => {
//   const context = {};
//   let html;
//  fetchCounter(apiResult => {
//       const sheets = new ServerStyleSheets();
//       const params = qs.parse(req.query);
//       const counter = parseInt(params.counter, 10) || apiResult || 0;
//       const preloadedState = { counter };
//       const store = configureStore(preloadedState);
      
//       const markup = renderToString(
//          sheets.collect(
//            <Provider store={store}>
//             <ThemeProvider theme={theme}>
//               <StaticRouter location={req.url} context={context}>
//                 <App />
//               </StaticRouter>
//             </ThemeProvider>
//           </Provider>
//       ));
//    const css = sheets.toString();
//       const finalState = store.getState();
//        html = `<!doctype html>
//           <html lang="">
//           <head>
//               <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//               <meta charSet='utf-8' />
//               <title>Times Foodie</title>
//               <meta name="viewport" content="width=device-width, initial-scale=1">
//               ${assets.client.css
//                 ? `<link rel="stylesheet" href="${assets.client.css}">`
//                 : ''}
//                 ${css ? `<style id='jss-ssr'>${css}</style>` : ''}
//                 ${process.env.NODE_ENV === 'production'
//                   ? `<script src="${assets.client.js}" defer></script>`
//                   : `<script src="${assets.client.js}" defer crossorigin></script>`}
//           </head>
//           <body>
//               <div id="root">${markup}</div>
//               <script>
//                 window.__PRELOADED_STATE__ = ${serialize(finalState)}
//               </script>
//           </body>
//       </html>`
//      });
//   return { html, context };
// };

// server
//   .disable('x-powered-by')
//   .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
//   .get('/*', (req, res) => {
//     const { html, context } = renderApp(req, res);

//     if (context.url) {
//       // Somewhere a `<Redirect>` was rendered
//       return res.redirect(301, context.url);
//     }

//     res.send(html);
//   });

// export default server;