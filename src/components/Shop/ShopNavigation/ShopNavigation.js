import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortingActions } from '../../../store/sorting-slice'
import { filteringActions } from '../../../store/filtering-slice'
import { FaThList, FaBoxes } from 'react-icons/fa'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import './ShopNavigation.css'
const ShopNavigation = props => {
	const [isMenuOpen, setIsMenuOpen] = useState([])
	const [filterCategory, setFilterCategory] = useState([])
	const typeRef = useRef('none')
	const dispatch = useDispatch()

	const sortHandler = () => {
		if (typeRef.current.value === 'none') {
			dispatch(sortingActions.sortNone())
		}
		if (typeRef.current.value === 'priceAsc') {
			dispatch(sortingActions.sortPriceAsc())
		}
		if (typeRef.current.value === 'priceDes') {
			dispatch(sortingActions.sortPriceDes())
		}
		if (typeRef.current.value === 'titleAsc') {
			dispatch(sortingActions.sortA_Z())
		}
		if (typeRef.current.value === 'titleDes') {
			dispatch(sortingActions.sortZ_A())
		}
	}

	const filterHandler = e => {
		if (e.target.checked === true) {
			setFilterCategory(filterCategory => [...filterCategory, e.target.value])
		} else {
			setFilterCategory(filterCategory.filter(item => item !== e.target.value))
		}
	}
	useEffect(() => {
		dispatch(filteringActions.newFilterValue(filterCategory))
	}, [filterCategory])

	const menuHandler = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='shop-navigation'>
			<div className={isMenuOpen ? 'shop-navigation__wrapper' : 'shop-navigation__wrapper menu__hidden'}>
				<div className='shop-navigation__sort'>
					<label htmlFor='sort'>Sort</label>
					<select onChange={sortHandler} name='sort' id='sorting' defaultValue='none' ref={typeRef}>
						<option value='none'>-</option>
						<option value='priceAsc'>Lowest Price</option>
						<option value='priceDes'>Highest Price</option>
						<option value='titleAsc'>A-Z</option>
						<option value='titleDes'>Z-A</option>
					</select>
				</div>
				<hr />
				<div className='shop-navigation__category'>
					<p>Categories</p>
					<ul className='shop-navigation__category--box'>
						<li>
							<input type='checkbox' id='backpacks' value='backpack' onClick={filterHandler} />
							<label htmlFor='backpacks'>Backpacks</label>
						</li>
						<li>
							<input type='checkbox' id='jackets' value='jacket' onClick={filterHandler} />
							<label htmlFor='jackets'>Jackets</label>
						</li>
						<li>
							<input type='checkbox' id='t-shirts' value='shirt' onClick={filterHandler} />
							<label htmlFor='t-shirts'>T-Shirts</label>
						</li>
						<li>
							<input type='checkbox' id='sleeves' value='sleeve' onClick={filterHandler} />
							<label htmlFor='sleeves'>Sleeves</label>
						</li>
						<li>
							<input type='checkbox' id='casual' value='casual' onClick={filterHandler} />
							<label htmlFor='casual'>Casual</label>
						</li>
					</ul>
				</div>
				<hr />
				<div className='shop-navigation__view'>
					<FaThList className='shop-navigation__view--list' />
					<FaBoxes className='shop-navigation__view--box' />
				</div>
			</div>
			<div className='shop-navigation__smallscreen-menu '>
				<BsFillArrowDownSquareFill
					className='shop-navigation__smallscreen-menu--show-icon'
					style={isMenuOpen && { transform: 'rotate(180deg)' }}
					onClick={menuHandler}
				/>
			</div>
		</div>
	)
}
export default ShopNavigation
