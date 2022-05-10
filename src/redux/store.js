import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsReducer from "./contacts/contactsSlice";

const reducer = {
  phonebook: contactsReducer,
};
const logger = createLogger({
  collapsed: logEntry => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // thunk: {
      //   extraArgument: getDataContacts(),
      // },
      serializableCheck: false,
    }).concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
  //   preloadedState,
  //   enhancers: [reduxBatch],
});
export default store;
