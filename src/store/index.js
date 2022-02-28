import { configureStore, createSlice } from '@reduxjs/toolkit'
import clothesReducer from './fetchapi-slice'
import sortingReducer from './sorting-slice'
import filteringReducer from './filtering-slice'
const store = configureStore({
	reducer: {
		fetchClothes: clothesReducer.reducer,
		sortingClothes: sortingReducer.reducer,
		filteringClothes: filteringReducer.reducer,
	},
})

export default store
