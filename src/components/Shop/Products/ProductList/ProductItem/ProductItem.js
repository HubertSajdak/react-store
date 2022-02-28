import React from 'react'
import './ProductItem.css'
const ProductItem = ({ clothesData }) => {
	return (
		<div className='product'>
			<div className='product-img'>
				<img src={clothesData.image} alt='' />
			</div>
			<div className='product-text'>
				<h4>{clothesData.title}</h4>
				<p>${clothesData.price}</p>
			</div>
			<button className='product-button'>Add To Cart</button>
		</div>
	)
}

export default ProductItem
