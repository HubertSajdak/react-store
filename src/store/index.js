import { configureStore, createSlice } from '@reduxjs/toolkit'
import clothesReducer from './fetchapi-slice'

const store = configureStore({
	reducer: { fetchClothes: clothesReducer.reducer },
})
export default store
