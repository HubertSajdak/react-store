import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClothes } from './store/fetchapi-slice'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import FormModal from './components/Auth/FormModal'
import About from './components/About/About'
import './App.css'

function App() {
	const dispatch = useDispatch()
	// const { clothes, loading, error } = useSelector(state => state.fetchClothes)
	const isFormModalOpen = useSelector(state => state.userAuth.formModalOpen)
	useEffect(() => {
		dispatch(getClothes())
	}, [])
	return (
		<div>
			{isFormModalOpen && <FormModal />}

			<Navbar />
			<ToastContainer style={{ fontSize: '1.5rem' }} limit={3} autoClose={2000} />
			<main>
				<Switch>
					<Route path='/welcome'>
						<Welcome />
					</Route>
					<Route path='/store'>
						<Shop />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
				</Switch>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default App
