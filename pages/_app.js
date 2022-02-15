import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import { persistor, wrapper, store } from "../store/store";
import { ToastProvider } from "react-toast-notifications";
import { useSelector } from "react-redux";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import { Provider } from "react-redux";
import Loading from "../components/Loading";

export default wrapper.withRedux(({ Component, pageProps }) => {
  const loading = useSelector((state) => state.loading);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ToastProvider autoDismiss>
          <Head>
            <meta
              content="width=device-width, height=device-height, initial-scale=1"
              name="viewport"
            />
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
          </Head>
          {loading && <Loading />}
          <Component {...pageProps} />
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
});
