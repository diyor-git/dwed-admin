import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authCreatedApi from "../auth/api";
import adminCreatedApi from "../admin/api";

const reducers = combineReducers({
  [authCreatedApi.reducerPath]: authCreatedApi.reducer,
  [adminCreatedApi.reducerPath]: adminCreatedApi.reducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authCreatedApi.middleware,
      adminCreatedApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
