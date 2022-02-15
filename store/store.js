import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";
import { createWrapper } from "next-redux-wrapper";
import { devToolsEnhancer } from "redux-devtools-extension";

import * as reducers from "./reducers";

const in24Hours = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies, {
    setCookieOptions: {
      expires: in24Hours,
      secure: true,
      sameSite: "strict",
    },
  }),
  whitelist: ["user", "accessToken", "profile"],
};

const allReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer, devToolsEnhancer());
const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });
export const persistor = persistStore(store);
