import { configureStore } from '@reduxjs/toolkit'
import clothesReducer from './fetchapi-slice'
import sortingReducer from './sorting-slice'
import filteringReducer from './filtering-slice'
import cartReducer from './cart-slice'
const store = configureStore({
	reducer: {
		fetchClothes: clothesReducer.reducer,
		sortingClothes: sortingReducer.reducer,
		filteringClothes: filteringReducer.reducer,
		cart: cartReducer.reducer,
	},
})

export default store
