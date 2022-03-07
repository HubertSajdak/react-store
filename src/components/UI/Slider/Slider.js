import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import './Slider.css'
const Slider = ({ clothesData }) => {
	const [current, setCurrent] = useState(0)
	const length = clothesData.length

	if (!Array.isArray(clothesData) || clothesData.length < 0) {
		return null
	}
	const prevSlide = () => {
		setCurrent(current <= 0 ? length - 1 : current - 1)
	}
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	return (
		<section className='slider'>
			<BsArrowLeft className='left-arrow' onClick={prevSlide} />
			{clothesData.map((item, index) => {
				return (
					<div className={index === current ? 'slider-items active' : 'slider-items'} key={index}>
						{index === current && (
							<>
								<div className='slider-item_img'>
									<img src={item.image} alt={item.title} />
								</div>
								<div className='slider-item_text'>
									<h4>{item.title}</h4>
									<p>${item.price.toFixed(2)}</p>
								</div>
							</>
						)}
					</div>
				)
			})}
			<BsArrowRight className='right-arrow' onClick={nextSlide} />
		</section>
	)
}

export default React.memo(Slider)
