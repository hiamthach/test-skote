import React from "react";
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister()
