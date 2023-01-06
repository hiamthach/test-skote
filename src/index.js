import React from "react";
// import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";

import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <React.Fragment>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </React.Fragment>
//     </Provider>
//   </React.StrictMode>
// );

const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
      <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Provider>,
  root
);

serviceWorker.unregister()
