import { createSlice } from '@reduxjs/toolkit'
const filteringSlice = createSlice({
	name: 'filtering',
	initialState: { filterValue: [] },
	reducers: {
		newFilterValue(state, action) {
			state.filterValue = action.payload
		},
	},
})

export const filteringActions = filteringSlice.actions
export default filteringSlice
