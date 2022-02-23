import React, { useState } from 'react'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import './Navbar.css'
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='navbar'>
			<div className='navbar__wrapper'>
				<div className='navbar__brand-name'>
					<span>Clothing</span> Store
				</div>
				<div className={isMenuOpen ? 'navbar__links ' : 'navbar__links hidden'}>
					<ul>
						<li>
							<CgProfile className='navbar__smallscreen-avatar-icon' />
						</li>
						<li>
							<BsCart2 className='navbar__smallscreen-cart-icon' />
						</li>
						<li>
							<a href='/welcome'>Home</a>
						</li>
						<li>
							<a href='/store'>Store</a>
						</li>
						<li>
							<a href='/'>About</a>
						</li>
					</ul>
				</div>
				<BsCart2 className='navbar__cart-icon' />

				<CgProfile className='navbar__avatar-icon' />

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
