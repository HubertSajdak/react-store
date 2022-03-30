import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem/CartItem'
import './CartList.css'

const CartList = () => {
	const cartItems = useSelector(state => state.cart.items)

	return (
		<ul className='cart-list'>
			{cartItems.map(item => {
				return (
					<CartItem
						key={item.id}
						itemsData={{
							id: item.id,
							title: item.title,
							image: item.image,
							quantity: item.quantity,
							totalPrice: item.totalPrice,
							price: item.price,
						}}
					/>
				)
			})}
		</ul>
	)
}

export default CartList
