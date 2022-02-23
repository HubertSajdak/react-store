import React from 'react'
import ShopNavigation from './ShopNavigation/ShopNavigation'
import ProductList from './Products/ProductList/ProductList'
import './Shop.css'
const Shop = porps => {
	return (
		<section>
			<ShopNavigation />
			<ProductList />
		</section>
	)
}

export default Shop
