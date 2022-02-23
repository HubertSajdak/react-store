import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getClothes = createAsyncThunk('clothes/getClothes', async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products')
		if (!res.ok) {
			throw new Error('Something went wrong!')
		}
		const data = await res.json()
		const loadedData = []

		for (const key in data) {
			loadedData.push({
				id: key,
				title: data[key].title,
				price: data[key].price,
				category: data[key].category,
				description: data[key].description,
				image: data[key].image,
			})
		}

		const clothesArr = loadedData.filter(item => {
			return ["men's clothing", "women's clothing"].includes(item.category)
		})
		return clothesArr
	} catch (error) {
		console.log(error.message)
	}
})
const clothesSlice = createSlice({
	name: 'clothes',
	initialState: {
		clothes: [],
		loading: false,
		error: null,
	},
	extraReducers: {
		[getClothes.pending]: (state, action) => {
			state.loading = true
		},
		[getClothes.fulfilled]: (state, action) => {
			state.loading = false
			state.clothes = action.payload
		},
		[getClothes.rejected]: (state, action) => {
			state.loading = false
			state.error = true
		},
	},
})
export default clothesSlice
