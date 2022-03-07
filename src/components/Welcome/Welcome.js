import React, { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import hero from '../../assets/hero.jpg'
import carouselImg from '../../assets/carousel-bg.jpg'
import Slider from '../UI/Slider/Slider'
import Error from '../UI/Error/Error'
import '../Welcome/Welcome.css'

const Welcome = ({ clothesData, errorMsg }) => {
	return (
		<div className='welcome section__wrapper'>
			<div className='welcome__hero-img'>
				<img src={hero} alt='woman looking at the camera' />
				<div className='welcome__text'>
					<h1 className='welcome__text_brand-name'>
						<span>Clothing</span> Store
					</h1>
					<p>
						<span>More than you can imagine. </span>Fashionable Designer brands and much more.
					</p>
					<Link to='/store'>
						<button className='welcome__button'>Explore</button>
					</Link>
				</div>
			</div>

			<div className='welcome__carousel-bg'>
				<img src={carouselImg} alt='people hanging out' />
				<div className='welcome__carousel-text'>
					<h3>
						<span>Express</span> yourself with our newest collection
					</h3>
					<p>Our clothes are made of the highest quality eco materials</p>
					<Link to='about'>
						<button className='welcome__button'>Read More</button>
					</Link>
				</div>
			</div>
			{!errorMsg ? (
				<div className='welcome__slider'>
					<Slider clothesData={clothesData} />
				</div>
			) : (
				<Error />
			)}
		</div>
	)
}

export default Welcome
