import React,{useEffect,useState,useContext,useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import contextStore from '../context/ContextStore';
import {chunkedData,allData} from '../hooks/useDataFetch.js';
import Card from './childs/Card';
import Buttons from './childs/Buttons';
import Banner from './Banner';
import {toast} from 'react-toastify';


function Home() {
	const chunkData=chunkedData(8);
	const allDatas=allData();
	const {data,setData}=useContext(contextStore);
	const {cart,setCart}=useContext(contextStore);
	const {page,setPage}=useContext(contextStore);
	const [product,setProduct]=useState();
	const [message,setMessage]=useState();
	const [showButton,setShowButton]=useState(true);

	useLayoutEffect(()=>{
		window.scrollTo(0,0);
	},[])

	useEffect(()=>{
		if(data===null||data===''){
			setProduct(chunkData[page]);
			setMessage(null);
			setShowButton(true);
		}
		
		else{
			let blob=allDatas.filter(item=>item.title.toLowerCase().includes(data.toLowerCase()));
			if(blob.length==0){
				setProduct(null);
				setMessage('No Product Found');
				setShowButton(false);
			}
			else{
			setProduct(blob);
			let length=blob.length;
			setMessage(`${length} Product Found`);
			setShowButton(false);
			}
		}
	},[chunkData,page,data])

	const cartFunction=(item)=>{
		const product_data=item;
		setCart([...cart,{product_data,quantity:1}])
		toast.success('Cart Added', {
		position: "top-right",
		autoClose: 500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		})
	}
	const buyFunction=()=>{
		toast.warn('Available soon', {
		position: "top-right",
		autoClose: 500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		})
	}
	
	return (
		<>
		<Banner/>
		<p className='text-center text-xl'>{message}</p>
		{
			product?
			<div className='container m-auto my-5 p-2 grid grid-cols-2 md:grid-cols-4 gap-4'>
			{
				product?.map((item,i)=>
					<div className="border rounded p-2 flex flex-col justify-between" key={i}>
					<Link to='/product' state={item}><Card title={item.title} description={item.description.slice(0,60)} price={item.price} image={item.images[0]}/></Link>
					<Buttons cartFunction={()=>cartFunction(item)} buyFunction={()=>buyFunction(item)}/>
					</div>
				)
			}
			</div>:<div className="w-1/4 m-auto"><img src="spinner.svg" alt=""/></div>
		}
		{
		showButton?
		<div className="flex items-center justify-center p-2 gap-3">
			{
				(page==0)?<button className='bg-[#ebe7e7] px-3 py-1 rounded text-xl'><i className="bi bi-chevron-left"></i></button>:<button className='bg-[#024f8b] px-3 py-1 rounded text-xl text-white' onClick={()=>setPage(page-1)}><i className="bi bi-chevron-left"></i></button>
			}
			<p className='bg-gray-200 px-2 py-1 aspect-square rounded-full'>{page+1}</p>
			{
				(page==chunkData.length-1)?<button className='bg-[#ebe7e7] px-3 py-1 rounded text-xl'><i className="bi bi-chevron-right"></i></button>:<button className='bg-[#024f8b] px-3 py-1 rounded text-xl text-white' onClick={()=>setPage(page+1)}><i className="bi bi-chevron-right"></i></button>
			}
		</div>:null
	}
			
		</>
	)
}

export default Home