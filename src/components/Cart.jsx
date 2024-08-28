import React,{useContext,useState,useEffect,useLayoutEffect} from 'react';
import contextStore from '../context/ContextStore';
import {useNavigate,Link} from 'react-router-dom';
import {toast} from 'react-toastify';

function Cart() {
	const {cart,setCart}=useContext(contextStore);
	const [total,setTotal]=useState(0);
	const navigate=useNavigate();

	useLayoutEffect(()=>{
		window.scrollTo(0,0);
	},[])

// =================calculating total price===================
	useEffect(() => {
	    const totalPrice = cart.reduce((acc, item) => {
	        return acc + (item.product_data.price*item.quantity);
	    	}, 0);
	    setTotal(totalPrice);
	}, [cart]);

	const navigateToHome=()=>{
		navigate('/');
	}

// =================quantity handler===================
	const cartHandler = (e, index) => {
    let updatedCart = [...cart];
	    if (e.target.innerText === '-') {
	        if (updatedCart[index].quantity > 0) {
	            updatedCart[index].quantity -= 1;
	        }
	    } else if (e.target.innerText === '+') {
	        updatedCart[index].quantity += 1;
	    }
	    setCart(updatedCart);
	};

// =================cart remove handler===================
	const cartRemover=(index)=>{
		cart.splice(index,1);
		setCart([...cart]);
		toast.warn('Cart removed', {
		position: "top-right",
		autoClose: 500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		});
	}

// =================single item purchase handler===================
	const buySingleItem=(index)=>{
		toast.warn('Available soon', {
		position: "top-right",
		autoClose: 500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		});
	}

// =================checkout handler===================
	const checkout=()=>{
		toast.warn('Available soon', {
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

	return (
		<div>
			{
				(cart.length==0)?
				<div className='flex flex-col gap-3 justify-center items-center p-5'>
					<img src="nocart.png" alt="" className='w-1/4'/>
					<p>Missing cart items?</p>
					<p className='text-sm'>Go back and browse some items you want</p>
					<button onClick={navigateToHome} className='bg-amber-600 px-5 py-1 rounded text-white text-sm'>HOME</button>
				</div>
				:
				<div className='p-5'>
					<div className='flex items-center justify-between p-3 mb-3 bg-gray-100'>
						<p>Your Carts</p>
						<Link to='/user'><p className='p-1 hover:underline text-blue-700'>Delivery Address</p></Link>
					</div>
				<div className="grid md:grid-cols-2 gap-3">
					<div className="">
						{
							cart?.map((item,index)=>{
								return(
									<div className="grid grid-cols-1 mt-3 gap-2" key={index}>
										<div className="flex gap-3">
											<img src={item.product_data.images[0]?item.product_data.images[0]:'noimage.png'} alt="" className='w-1/4 aspect-square rounded'/>
											<div>
											<p>{item.product_data.title}</p>
											<p className='text-[0.8rem] text-gray-500 mt-1'>{item.product_data.description.slice(0,100)}...</p>
											<p className='mt-1'><span><i className="bi bi-currency-dollar"></i></span>{item.product_data.price*item.quantity} <span className='text-gray-500 line-through'>{Math.round((item.product_data.price*item.quantity)*1.5)}</span></p>
											</div>
										</div>

										<div className="flex items-center justify-between mb-3">
										<div className='flex items-center gap-3 mt-3'>
											<button className='px-3 bg-gray-200 hover:bg-gray-300 text-2xl' onClick={(e)=>cartHandler(e,index)}>-</button>
											<p>{item.quantity}</p>
											<button className='px-3 bg-gray-200 hover:bg-gray-300 text-2xl' onClick={(e)=>cartHandler(e,index)}>+</button>
										</div>
										<div className="flex items-center gap-3 justify-end mt-3">
											<button onClick={()=>cartRemover(index)} className='border border-gray-500 px-2 py-1 text-sm hover:bg-gray-100'><i className="bi bi-trash3"></i> Remove</button>
											<button onClick={()=>buySingleItem(index)} className='border border-gray-500 px-2 py-1 text-sm hover:bg-gray-100'><i className="bi bi-lightning"></i>Buy Now</button>
										</div>
										</div>
									</div>
									)
							})
						}
				</div>
				<div className="bg-gray-100 p-5 overflow-auto h-[50vh] flex flex-col justify-between">
				<div>
				<div className="mb-5 flex justify-between">
					<p>Price Details</p>
					<p>Cart Items-{cart.length}</p>
				</div>
				<div>
					<div className='text-sm flex justify-between'>
						<p>Total Price ({cart.length} items)</p>
						<p><span><i className="bi bi-currency-dollar"></i></span>{total*1.5}</p>
					</div>
					<div className='text-sm flex justify-between mt-2'>
						<p>Discount</p>
						<p className='text-green-600'>-<span><i className="bi bi-currency-dollar"></i></span>{total*1.5-total}</p>
					</div>
					<div className='text-sm flex justify-between mt-2'>
						<p>Platform Fee</p>
						<p><span><i className="bi bi-currency-dollar"></i></span>3</p>
					</div>
					<div className='text-sm flex justify-between mt-2'>
						<p>Delivery Charges</p>
						<p className='text-green-600'>Free Delivery</p>
					</div>
				</div>
				</div>
				<div className='flex items-center justify-end gap-3'>
					<p><span><i className="bi bi-currency-dollar"></i></span>{(total+3)} <span className='text-gray-500 line-through'>{total*1.5}</span></p>
					<button onClick={checkout} className='bg-[#ffc100] px-2 py-1'>Place Order</button>
				</div>
				</div>
			</div>
			</div>
		}
		</div>
	)
}

export default Cart