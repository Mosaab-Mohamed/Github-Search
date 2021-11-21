import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./app/context/Context";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./app/App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zrxdg6eq.us.auth0.com"
    clientId="5pdUw4lC20bN1ZurlK7lOsjYSj5JXInB"
    redirectUri={window.location.origin}
  >
    <ContextProvider>
      <App />
    </ContextProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
