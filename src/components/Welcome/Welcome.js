import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import hero from '../../assets/hero.jpg'
import welcomeFilm from '../../assets/welcome-film1.mp4'
import Slider from '../UI/Slider/Slider'
import Error from '../UI/Error/Error'
import Spinner from '../UI/Spinner/Spinner'
import 'react-lazy-load-image-component/src/effects/blur.css'
import '../Welcome/Welcome.css'

const Welcome = () => {
	const { clothes, loading: isLoading, error: isError } = useSelector(state => state.fetchClothes)

	return (
		<section className='welcome section__wrapper'>
			<div className='welcome__hero-img'>
				<LazyLoadImage
					visibleByDefault={hero}
					className='lazy-img'
					src={hero}
					effect='blur'
					alt='woman looking at the camera'
				/>
				{/* <img src={hero} alt='woman looking at the camera' /> */}
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

			<div className='welcome__film'>
				{/* <img src={carouselImg} alt='people hanging out' /> */}
				<LazyLoadComponent>
					<video src={welcomeFilm} type='video/mp4' autoPlay loop muted></video>
				</LazyLoadComponent>
				<div className='welcome__film-text'>
					<h3>
						<span>Express</span> yourself with our newest collection
					</h3>
					<p>Our clothes are made of the highest quality eco materials</p>
					<Link to='about'>
						<button className='welcome__button'>Read More</button>
					</Link>
				</div>
			</div>
			{isLoading && <Spinner />}
			{!isError ? (
				<div className='welcome__slider'>
					<Slider clothesData={clothes} />
				</div>
			) : (
				<Error />
			)}
		</section>
	)
}

export default Welcome
