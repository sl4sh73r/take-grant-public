import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import  nodeReduser from "../sliseNode/nodeSlise";

export const store = configureStore({
  reducer: {
    node: nodeReduser,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>