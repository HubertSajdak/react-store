import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../../../store/cart-slice'
import './ProductItem.css'
const ProductItem = ({ clothesData }) => {
	const dispatch = useDispatch()
	const addItemToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id: clothesData.id,
				title: clothesData.title,
				price: clothesData.price,
				image: clothesData.image,
			})
		)
	}
	return (
		<div className='product'>
			<div className='product-img'>
				<img src={clothesData.image} alt='' />
			</div>
			<div className='product-text'>
				<h4>{clothesData.title}</h4>
			</div>
			<div className='product-price'>
				<p>${clothesData.price.toFixed(2)}</p>
			</div>
			<button onClick={addItemToCartHandler} className='product-button'>
				Add To Cart
			</button>
		</div>
	)
}

export default ProductItem
