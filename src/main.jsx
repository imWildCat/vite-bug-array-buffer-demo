import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CloudKitPackage, { CloudKit } from "tsl-apple-cloudkit";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

CloudKitPackage.configure({
  // locale: "en-us",
  services: {
    fetch,
    logger: console,
    // authTokenStore: {
    //   putToken: (id, token) => {
    //     console.log('set token for container:', id, token);
    //     AuthTokenStore.tokens[id] = token;
    //   },
    //   getToken: (id) => {
    //     console.log('getting token for:', id);

    //     return AuthTokenStore.tokens[id];
    //   },
    // },
  },
  containers: [
    {
      // Change this to a container identifier you own.
      containerIdentifier: "id does not matter",

      apiTokenAuth: {
        // And generate a web token through CloudKit Dashboard.
        apiToken:
          "token does not matter",

        persist: true, // Sets a cookie.

        signInButton: {
          id: "apple-sign-in-button",
          theme: "medium", // Other options: 'white', 'white-with-outline'.
        },

        signOutButton: {
          id: "apple-sign-out-button",
          theme: "medium",
        },
      },

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      environment: "development",
    },
  ],
});
