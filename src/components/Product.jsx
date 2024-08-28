import React,{useState,useEffect,useContext} from 'react';
import {useLocation} from 'react-router-dom';
import contextStore from '../context/ContextStore';
import {toast} from 'react-toastify';

function Product() {
	const location=useLocation();
	const {cart,setCart}=useContext(contextStore);
	const product_data=location.state;
	const [buy,setBuy]=useState(0);
	const [mrp,setMrp]=useState(0);
	const[addCart,setAddCart]=useState('Add Cart');

// =================random purchases handler===================
	useEffect(()=>{
		window.scrollTo(0,0);
		let num1=Math.round(Math.random()*600);
		let num2=Math.round(product_data.price*1.5);
		setBuy(num1);
		setMrp(num2);
	},[product_data])

// =================add cart handler===================
	const cartFunction=(e)=>{
		setCart([...cart,{product_data,quantity:1}])
		setAddCart('Cart Added');
		e.target.disabled=true;
		toast.success('Cart Added', {
		position: "top-right",
		autoClose: 500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		});
	}

// =================single item purchase handler===================
	const buyFunction=()=>{
		toast.warn('Available soon', {
		position: "top-right",
		autoClose: 1000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		});
	}

	return (
		<div>
			<div className='container m-auto grid md:grid-cols-2 gap-3 mt-5'>
				<div>
				<div className=" mb-3 overflow-x-auto overflow-y-hidden">
				<div className='flex gap-0.5  '>
				<img src={product_data.images[0]} alt="" className='w-2/4'/>
				<img src={product_data.images[1]} alt="" className='w-2/4'/>
				<img src={product_data.images[2]} alt="" className='w-2/4'/>	
				</div>
				</div>
				<p className='text-center'><span className='text-green-900'><i className="bi bi-graph-up-arrow"></i></span> {buy} people ordered this in the last 30 days</p>
				</div>
				<div className="p-3">
				<p className='text-2xl'>{product_data.title}</p>
				<p className='text-gray-500'>Category: {product_data.category.name}</p>
				<p className='mt-3'>{product_data.description}</p>
				<div className="flex items-center mt-2">
				<img src="offer.jpg" alt="" className='w-[5rem] aspect-video'/>
				<p className='font-bold'><span><i className="bi bi-currency-dollar"></i></span>{product_data.price} <span className='text-gray-500 line-through'>{mrp}</span></p>
				</div>
				<div className='flex gap-2 mt-5'>
					<button onClick={(e)=>cartFunction(e)} className='w-full p-2 bg-gray-100 hover:bg-gray-300 duration-150'>{addCart}</button>
					<button onClick={buyFunction} className='w-full p-2 bg-blue-500 hover:bg-blue-600 text-white duration-150'>Buy now</button>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Product