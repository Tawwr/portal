import { createSlice } from '@reduxjs/toolkit'
import { AppStateType } from 'types'

const initialState: AppStateType = {
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts:(state, { payload }: { payload: string[] }) =>{
      // state.products = payload
    }
  },
})

export const { setProducts } = appSlice.actions

export default appSlice.reducer;
