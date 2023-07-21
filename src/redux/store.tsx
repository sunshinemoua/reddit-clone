import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: { posts: postReducer },
});

// inferring type RootState and AppDispatch from store allows correct updates as more state slices are added
export type RootState = ReturnType<typeof store.getState>;

// Dispatch doesnt know about about thunks or other middleware. This is why a customized ApppDispatch type
//  from the store is needed, so we can use middlewares with useDispatch
export type AppDispatch = typeof store.dispatch;
