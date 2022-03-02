import React from 'react'
import './Spinner.css'
const Spinner = () => {
	return (
		<>
			{/* <p className='loading'>Loading...</p> */}
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
