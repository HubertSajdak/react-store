import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import './Navbar.css'
const Navbar = () => {
	const counter = useSelector(state => state.cart.totalQuantity)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='navbar'>
			<div className='navbar__wrapper'>
				<Link to='/welcome' className='navbar__brand-name'>
					<span>Clothing</span> Store
				</Link>
				<div className='navbar__menu'>
					<AiOutlineBars className='navbar__menu--open-icon' />
				</div>
				<div className='navbar__customer-panel'>
					<div className='navbar__customer-panel_cart'>
						<div className='navbar__customer-panel--cart-counter'>{counter}</div>
						<BsCart2 className='navbar__customer-panel--cart-icon' />
					</div>
					<div className='navbar__customer-panel_profile'>
						<CgProfile className='navbar__customer-panel--profile-icon' />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
