import React,{useContext,useState} from 'react';
import {NavLink} from 'react-router-dom';
import contextStore from '../context/ContextStore';
import {useLocation,useNavigate} from 'react-router-dom';

function Header() {
	const {data,setData,cart}=useContext(contextStore);
	const [input,setInput]=useState('');
	const [flag,setFlag]=useState(false);
	const location=useLocation();
	const navigate=useNavigate();
	const handleClick=()=>{
		if(location.pathname==='/'){
		setFlag(!flag);	
		}
		else{
		navigate('/');
		setFlag(!flag);	
		}
	}
	const handleChange=(e)=>{
		setData(e.target.value);
		navigate('/');
	}
	return (
		<div className='sticky top-0 z-20'>
		<div className='bg-[#024f8b] px-3 py-2 flex items-center justify-between'>
		{/* <img src="logo.png" alt="" className='w-[18%] md:w-[13%]'/> */}
		LOGO
		<div>
			<ul className='flex gap-3 text-white'>
				<li><button onClick={handleClick}><i className="bi bi-search"></i></button></li>
				<li><NavLink className='hover:bg-white hover:text-blue-800 p-1 hover:rounded duration-150' to='/'><span><i className="bi bi-house-fill"></i></span> HOME</NavLink></li>
				<li><NavLink className='hover:bg-white hover:text-blue-800 p-1 hover:rounded duration-150' to='/user'><span><i className="bi bi-person-circle"></i></span> USER</NavLink></li>
				<li><NavLink to='/cart'><span><i className="bi bi-cart-fill"></i></span><sup><span className='bg-red-700 px-1 rounded'>{cart.length}</span></sup></NavLink></li>
			</ul>
		</div>
		</div>
		{
			flag?
			<div className='flex justify-center px-3 py-2' id='searchbox'>
			<input type="text" value={data} onChange={(e)=>handleChange(e)} className='py-2 px-5 outline-none w-full md:w-1/2 border border-black border-r-0' placeholder='Search Product'/>
			<button onClick={()=>setData('')} className='bg-white border border-black border-l-0 px-3'><i className="bi bi-x-lg"></i></button>
			</div>:null
		}
		
		</div>
	)
}
export default Header