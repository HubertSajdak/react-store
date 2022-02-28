import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sortingActions } from '../../../store/sorting-slice'
import { filteringActions } from '../../../store/filtering-slice'
import { useSelector } from 'react-redux'
import './ShopNavigation.css'
const ShopNavigation = () => {
	const filterValue = useSelector(state => state.filteringClothes.filterValue)
	const [filterCategory, setFilterCategory] = useState([])
	const categoryRef = useRef()
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
			dispatch(filteringActions.newFilterValue(filterCategory))
		} else {
			setFilterCategory(filterCategory.filter(item => item !== e.target.value))
			dispatch(filteringActions.newFilterValue(filterCategory))
		}
	}
	return (
		<div className='shop-navigation'>
			<div className='shop-navigation__wrapper'>
				<div className='shop-navigation__sort'>
					<label htmlFor='sort'>Sort</label>
					<select onChange={sortHandler} name='sort' id='sorting' defaultValue='none' ref={typeRef}>
						<option value='none'>None</option>
						<option value='priceAsc'>Lowest Price</option>
						<option value='priceDes'>Highest Price</option>
						<option value='titleAsc'>A-Z</option>
						<option value='titleDes'>Z-A</option>
					</select>
				</div>
				<div className='shop-navigation__category' ref={categoryRef}>
					<p>Categories</p>
					<input type='checkbox' id='backpacks' value='backpack' onClick={filterHandler} />
					<label htmlFor='backpacks'>Backpacks</label>
					<input type='checkbox' id='jackets' value='jacket' onClick={filterHandler} />
					<label htmlFor='jackets'>Jackets</label>
					<input type='checkbox' id='t-shirts' value='shirt' onClick={filterHandler} />
					<label htmlFor='t-shirts'>T-Shirts</label>
					<input type='checkbox' id='sleeves' value='sleeve' onClick={filterHandler} />
					<label htmlFor='sleeves'>Sleeves</label>
					<input type='checkbox' id='casual' value='casual' onClick={filterHandler} />
					<label htmlFor='casual'>Casual</label>
				</div>
			</div>
		</div>
	)
}
export default ShopNavigation
