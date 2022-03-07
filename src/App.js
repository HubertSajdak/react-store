import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClothes } from './store/fetchapi-slice'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Spinner from './components/UI/Spinner/Spinner'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
	const dispatch = useDispatch()
	const { clothes, loading, error } = useSelector(state => state.fetchClothes)
	useEffect(() => {
		dispatch(getClothes())
	}, [])
	return (
		<div>
			<Navbar />
			<main>
				<Switch>
					<Route path='/welcome'>{loading ? <Spinner /> : <Welcome clothesData={clothes} errorMsg={error} />}</Route>
					<Route path='/store'>
						<Shop props={clothes} errorMsg={error} />
					</Route>
					<Route path='/cart'>
						<Cart />
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
