import React from 'react'
import { RiEmotionSadFill } from 'react-icons/ri'
const Error = () => {
	return (
		<div className='error-message'>
			<p>Something Went Wrong</p>
			<RiEmotionSadFill className='error-message__icon' />
		</div>
	)
}

export default Error
