import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		totalQuantity: localStorage.getItem('cartCounter') > 0 ? JSON.parse(localStorage.getItem('cartCounter')) : 0,
		totalAmount: 0,
		items: localStorage.getItem('cartStorage') ? JSON.parse(localStorage.getItem('cartStorage')) : [],
	},
	reducers: {
		totalAmountCounter(state, action) {
			state.totalAmount = state.items.reduce((total, item) => {
				return total + item.totalPrice
			}, 0)
		},
		addItemToCart(state, action) {
			const newItem = action.payload
			const existingItem = state.items.find(item => item.id === newItem.id)
			state.totalQuantity++
			toast.success('Item Added To Cart', {
				position: 'bottom-left',
				theme: 'colored',
			})
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					image: newItem.image,
					title: newItem.title,
					quantity: 1,
					totalPrice: newItem.price,
				})
			} else {
				existingItem.quantity++
				existingItem.totalPrice = existingItem.totalPrice + newItem.price
			}
			localStorage.setItem('cartStorage', JSON.stringify(state.items))
			localStorage.setItem('cartCounter', JSON.stringify(state.totalQuantity))
		},
		removeItemFromCart(state, action) {
			const id = action.payload
			const existingItem = state.items.find(item => item.id === id)
			state.totalQuantity--
			toast.info('Item Removed From Cart', {
				position: 'bottom-left',
				theme: 'colored',
			})
			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id)
			} else {
				existingItem.quantity--
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price
			}
			localStorage.setItem('cartStorage', JSON.stringify(state.items))
			localStorage.setItem('cartCounter', JSON.stringify(state.totalQuantity))
		},
	},
})
export const cartActions = cartSlice.actions
export default cartSlice
