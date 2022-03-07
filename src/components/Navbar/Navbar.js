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
				<div className='navbar__brand-name'>
					<span>Clothing</span> Store
				</div>
				<div className={isMenuOpen ? 'navbar__links ' : 'navbar__links hidden'}>
					<ul>
						{/* <li>
							<CgProfile className='navbar__smallscreen-avatar-icon' />
						</li>
						<li>
							<BsCart2 className='navbar__smallscreen-cart-icon' />
						</li> */}
						<li>
							<NavLink activeClassName={'link-active'} to='/welcome'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName={'link-active'} to='/store'>
								Store
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName={'link-active'} to='/about'>
								About
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='navbar__user-options'>
					<Link to='/cart' className='navbar__cart-container'>
						{counter > 0 ? (
							<div className='navbar__cart-counter'>
								<p>{counter}</p>
							</div>
						) : null}
						<BsCart2 className='navbar__cart-icon' />
					</Link>

					<CgProfile className='navbar__avatar-icon' />

					<button className='navbar__login-button'>Login</button>
				</div>
				{/* MOBILE NAVBAR  */}

				<div className='navbar__smallscreen'>
					{isMenuOpen ? (
						<AiOutlineClose className='overlay-close' onClick={() => setIsMenuOpen(false)} />
					) : (
						<AiOutlineBars className='overlay-open' onClick={() => setIsMenuOpen(true)} />
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
