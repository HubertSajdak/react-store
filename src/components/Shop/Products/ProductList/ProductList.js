import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import './ProductList.css'

const ProductList = () => {
	const clothesData = useSelector(state => state.fetchClothes.clothes)
	const sortType = useSelector(state => state.sortingClothes.sortAs)
	const filterValue = useSelector(state => state.filteringClothes.filterValue)
	const [filteredData, setFilteredData] = useState([])
	const [sortedData, setSortedData] = useState([])

	useEffect(() => {
		let newClothesData = [...clothesData]
		if (filterValue.length === 0) {
			setFilteredData(newClothesData)
		} else {
			setFilteredData(newClothesData.filter(item => filterValue.some(val => item.title.toLowerCase().includes(val))))
		}
	}, [clothesData, filterValue])
	useEffect(() => {
		let newClothesData = [...filteredData]
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
	}, [sortType, filteredData])

	return (
		<div className='product-list'>
			{sortedData.map(item => {
				return <ProductItem key={item.id} clothesData={item} />
			})}
		</div>
	)
}

export default ProductList
