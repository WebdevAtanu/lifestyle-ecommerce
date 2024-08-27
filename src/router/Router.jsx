import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Product from '../components/Product';
import User from '../components/User';
import Cart from '../components/Cart';


function Router() {
	return (
		<BrowserRouter>
		<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/product' element={<Product/>}/>
				<Route path='/user' element={<User/>}/>
				<Route path='/cart' element={<Cart/>}/>
			</Routes>
		<Footer/>
		</BrowserRouter>
	)
}

export default Router