import { type AppType } from "next/app";
import { Provider } from 'react-redux';
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { store } from "../appStore/store";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
