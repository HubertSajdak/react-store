import { createSlice } from '@reduxjs/toolkit'
const viewSlice = createSlice({
	name: 'view',
	initialState: { view: true },
	reducers: {
		toggleView(state) {
			state.view = !state.view
		},
	},
})
export const viewActions = viewSlice.actions
export default viewSlice
