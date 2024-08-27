import React from 'react'

function Buttons(props) {
	return (
		<div className='flex gap-3 justify-between mt-2'>
			<button onClick={props.cartFunction} className='bg-gray-100 w-full hover:bg-gray-200'>Add Cart</button>
			<button onClick={props.buyFunction} className='bg-green-600 w-full text-white hover:bg-green-700'>Buy Now</button>
		</div>
	)
}

export default Buttons