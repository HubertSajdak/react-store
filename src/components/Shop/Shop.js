import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShopNavigation from './ShopNavigation/ShopNavigation'
import ProductList from './Products/ProductList/ProductList'
import Spinner from '../UI/Spinner/Spinner'
import Error from '../UI/Error/Error'
import './Shop.css'
const Shop = porps => {
	const isLoading = useSelector(state => state.fetchClothes.loading)
	const isError = useSelector(state => state.fetchClothes.error)
	return (
		<section className='shop section__wrapper'>
			<ShopNavigation />
			{isLoading ? <Spinner /> : <ProductList />}
			{isError && <Error />}
		</section>
	)
}

export default Shop
