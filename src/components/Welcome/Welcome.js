import React, { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import hero from '../../assets/hero.jpg'
import carouselImg from '../../assets/carousel-bg.jpg'
import Slider from '../UI/Slider/Slider'
import '../Welcome/Welcome.css'

const Welcome = ({ clothesData, errorMsg }) => {
	return (
		<div className='welcome section__wrapper'>
			<div className='welcome__hero-img'>
				<img src={hero} alt='woman looking at the camera' />
				<div className='welcome__text'>
					<h1>
						<span>Clothing</span> Store
					</h1>
					<p>
						<span>More than you can imagine. </span>Fashionable Designer brands and much more.
					</p>
					<button className='welcome__button'>Explore</button>
				</div>
			</div>

			<div className='welcome__carousel-bg'>
				<img src={carouselImg} alt='people hanging out' />
				<div className='welcome__carousel-text'>
					<h3>
						<span>Express</span> yourself with our newest collection
					</h3>
					<p>Our clothes are made of the highest quality eco materials</p>
					<button className='welcome__button'>Read More</button>
				</div>
			</div>
			{!errorMsg ? (
				<div className='welcome__slider'>
					<Slider clothesData={clothesData} />
				</div>
			) : (
				<h4 style={{ fontSize: '5rem', color: 'red', textAlign: 'center' }}>Couldn't fetch the data</h4>
			)}
		</div>
	)
}

export default Welcome
