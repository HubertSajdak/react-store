import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../../../store/cart-slice'
import { FaCartPlus } from 'react-icons/fa'
import './ProductItem.css'
const ProductItem = ({ clothesData }) => {
	const viewType = useSelector(state => state.view.view)
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
		<div className={!viewType ? 'product' : 'product product__list-view'}>
			<div className={!viewType ? 'product-img' : 'product-img product-img__list-view'}>
				<img src={clothesData.image} alt='' />
			</div>
			<div className={!viewType ? 'product-text' : 'product-text__list-view'}>
				<h4>{clothesData.title}</h4>
			</div>
			<div className={!viewType ? 'product-price' : 'product-price__list-view'}>
				<p>${clothesData.price.toFixed(2)}</p>
			</div>
			<button onClick={addItemToCartHandler} className='product-button'>
				<FaCartPlus className='product-button__icon' />
			</button>
		</div>
	)
}

export default ProductItem
