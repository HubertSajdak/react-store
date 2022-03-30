import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const API_KEY = process.env.REACT_APP_API_KEY

export const registerAuth = createAsyncThunk('registerAuth/registerAuth', async (values, thunkAPI) => {
	try {
		const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
			method: 'POST',
			body: JSON.stringify({
				email: values.email,
				password: values.password,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		let data = await res.json()

		if (res.ok) {
			toast.success('Account created', {
				position: 'bottom-left',
				theme: 'colored',
			})
		} else {
			toast.error('Could not create an account', {
				position: 'bottom-left',
				theme: 'colored',
			})
			return thunkAPI.rejectWithValue(data.error.message)
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

export const loginAuth = createAsyncThunk('loginAuth/loginAuth', async (values, thunkAPI) => {
	try {
		const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
			method: 'POST',
			body: JSON.stringify({
				email: values.email,
				password: values.password,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		let data = await res.json()
		if (res.ok) {
			toast.success('Logged in successfully', {
				position: 'bottom-left',
				theme: 'colored',
			})
			localStorage.setItem('idToken', data.idToken)
			// localStorage.setItem('tokenExpirationTime', data.expiresIn)
		} else {
			toast.error('Could not log in', {
				position: 'bottom-left',
				theme: 'colored',
			})
			return thunkAPI.rejectWithValue(data.error.message)
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

const registerAuthSlice = createSlice({
	name: 'regAuth',
	initialState: {
		processing: false,
		error: false,
		errorMessage: '',
	},
	extraReducers: {
		[registerAuth.pending]: state => {
			state.processing = true
		},
		[registerAuth.fulfilled]: state => {
			state.processing = false
			state.error = false
		},
		[registerAuth.rejected]: (state, action) => {
			state.processing = false
			state.error = true
			state.errorMessage = action.payload
		},
	},
})
const loginAuthSlice = createSlice({
	name: 'logAuth',
	initialState: {
		processing: false,
		error: false,
		errorMessage: '',
		isLogged: false,
		token: localStorage.getItem('idToken') ? localStorage.getItem('idToken') : null,
	},
	reducers: {
		expirationTime() {},
		userLogout(state) {
			toast.success('Logged out', {
				position: 'bottom-left',
				theme: 'colored',
			})
			state.isLogged = false
			localStorage.removeItem('idToken')
		},
	},
	extraReducers: {
		[loginAuth.pending]: state => {
			state.processing = true
		},
		[loginAuth.fulfilled]: (state, action) => {
			state.processing = false
			state.error = false
			state.errorMessage = ''
			state.isLogged = true
		},
		[loginAuth.rejected]: (state, action) => {
			state.processing = false
			state.error = true
			state.errorMessage = action.payload
			state.token = null
		},
	},
})
const userAuthSlice = createSlice({
	name: 'auth',
	initialState: { formModalOpen: false },
	reducers: {
		modalFormHandler(state) {
			state.formModalOpen = !state.formModalOpen
		},
	},
})
export const userAuthActions = userAuthSlice.actions
export const registerAuthActions = registerAuthSlice.actions
export const loginAuthActions = loginAuthSlice.actions
export { userAuthSlice, registerAuthSlice, loginAuthSlice }
