import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import './Navbar.css'
const Navbar = () => {
	const counter = useSelector(state => state.cart.totalQuantity)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef()
	useEffect(() => {
		let handler = e => {
			if (!menuRef.current.contains(e.target)) {
				setIsMenuOpen(false)
			}
		}
		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])
	return (
		<nav className='navbar'>
			<div className='navbar__wrapper'>
				<Link to='/welcome' className='navbar__brand-name'>
					<span>Clothing</span> Store
				</Link>
				<div className='navbar__smallscreen-menu'>
					<AiOutlineBars className='navbar__menu--open-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />
					<ul
						className='navbar__smallscreen-menu-links'
						ref={menuRef}
						style={isMenuOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-110%)' }}>
						<AiOutlineClose className='navbar__menu--close-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />
						<li>
							<Link to='/welcome' onClick={() => setIsMenuOpen(false)}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/store' onClick={() => setIsMenuOpen(false)}>
								Store
							</Link>
						</li>
						<li>
							<Link to='/about' onClick={() => setIsMenuOpen(false)}>
								About Us
							</Link>
						</li>
					</ul>
				</div>

				<ul className='navbar__links'>
					<li>
						<Link to='/welcome' onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link to='/store' onClick={() => setIsMenuOpen(false)}>
							Store
						</Link>
					</li>
					<li>
						<Link to='/about' onClick={() => setIsMenuOpen(false)}>
							About Us
						</Link>
					</li>
				</ul>

				<div className='navbar__customer-panel'>
					<NavLink to='/cart' className='navbar__customer-panel_cart'>
						<div className='navbar__customer-panel--cart-counter'>{counter}</div>
						<BsCart2 className='navbar__customer-panel--cart-icon' />
					</NavLink>
					<div className='navbar__customer-panel_profile'>
						<CgProfile className='navbar__customer-panel--profile-icon' />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
