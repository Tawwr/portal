import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'store/slices/app.slice'
const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;
