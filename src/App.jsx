import { useState,useLayoutEffect } from 'react'
import './App.css';
import Router from './router/Router';
import contextStore from './context/ContextStore';
import {toast} from 'react-toastify';


function App() {
  const [search,setSearch]=useState('');
  const [cart,setCart]=useState([]);
    useLayoutEffect(()=>{
    toast.warn("This project isn't using any backend right now!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  },[])
  return (
    <contextStore.Provider value={{data:search,setData:setSearch,cart:cart,setCart:setCart}}>
      <Router/>
      </contextStore.Provider>
      )
    }

export default App
