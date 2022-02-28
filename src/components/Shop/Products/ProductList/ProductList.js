import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import store from '../../../../store/index'
import './ProductList.css'

const ProductList = () => {
	const [sortedData, setSortedData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	// getting the data from api
	const clothesData = useSelector(state => state.fetchClothes.clothes)
	const sortType = useSelector(state => state.sortingClothes.sortAs)
	const filterValue = useSelector(state => state.filteringClothes.filterValue)

	// sorting data

	useEffect(() => {
		let newClothesData = [...clothesData]
		const sortArray = type => {
			const types = {
				none: 'none',
				priceAsc: 'price',
				priceDes: 'price',
				titleAsc: 'title',
				titleDes: 'title',
			}

			const sortProperty = types[type]
			if (sortType === 'priceAsc') {
				return newClothesData.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1))
			} else if (sortType === 'priceDes') {
				return newClothesData.sort((a, b) => (a[sortProperty] < b[sortProperty] ? 1 : -1))
			} else if (sortType === 'titleAsc') {
				return newClothesData.sort((a, b) => (a[sortProperty].toUpperCase() > b[sortProperty].toUpperCase() ? 1 : -1))
			} else if (sortType === 'titleDes') {
				return newClothesData.sort((a, b) => (a[sortProperty].toUpperCase() < b[sortProperty].toUpperCase() ? 1 : -1))
			} else {
				return newClothesData
			}
		}
		setSortedData(newClothesData)
		sortArray(sortType)
	}, [sortType, clothesData])

	// filtering data (working on it)

	useEffect(() => {
		let filteredClothesData = [...sortedData]
		const filterArray = () => {
			const keyFilter = 'title'

			filteredClothesData.filter(item => item[keyFilter].includes(filterValue))
		}
		filterArray()
		setFilteredData(filteredClothesData)
	}, [filterValue, sortedData])

	return (
		<div className='product-list'>
			{filteredData.map(item => {
				return <ProductItem key={item.id} clothesData={item} />
			})}
		</div>
	)
}

export default ProductList
