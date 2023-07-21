import { configureStore } from "@reduxjs/toolkit";
// import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/curriedDefaultMiddleware";

import { articleApi } from "./article";

export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
