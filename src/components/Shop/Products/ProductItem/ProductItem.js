import React from 'react'
import './ProductItem.css'
const ProductItem = props => {
	return (
		<div className='product'>
			<div className='product-img'></div>
			<div className='product-text'>
				<h4>Product Ttile</h4>
				<p>Product Description</p>
				<p>$39.99</p>
			</div>
			<button className='product-button'>Add To Cart</button>
		</div>
	)
}

export default ProductItem
