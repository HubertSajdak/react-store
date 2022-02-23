import React from 'react'
import './Spinner.css'
const Spinner = () => {
	return (
		<>
			<p className='loading'>Loding...</p>
			<div className='spinner'>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
			</div>
		</>
	)
}

export default Spinner
