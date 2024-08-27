import React from 'react'

function Card(props) {
	return (
		<div className='flex flex-col text-center'>
		<div className="w-1/1 aspect-square overflow-hidden">
			<img src={props.image?props.image:'noimage.png'} alt="" className='hover:scale-110 duration-150'/>
		</div>
		<div className="flex flex-col justify-between items-center">
			<p className='text-[1.1rem]'>{props.title}</p>
			<p className='text-sm text-gray-500'>{props.description}...</p>
			<p className='font-bold'><span><i className="bi bi-currency-dollar"></i></span>{props.price}</p>
		</div>
		</div>
	)
}

export default Card