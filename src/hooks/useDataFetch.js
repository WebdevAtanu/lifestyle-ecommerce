import React,{useState,useEffect} from 'react';
import product_data from '../data.json';
import axios from 'axios';
import chunk from 'lodash/chunk';

//============================API NOT WORKING=====================================================

// ===========all data============
// export function allData() {
// 	const [product,setProduct]=useState([]);
// 	useEffect(()=>{
// 		axios.get('https://api.escuelajs.co/api/v1/products')
// 		.then(res=>setProduct(res.data.slice(0,45)))
// 		.catch(err=>console.log(err));
// 	})
// 	return product;
// }
 
// // ===========chunk data============
// export function chunkedData(chunkSize) {
//   const [productChunks, setProductChunks] = useState([]);
// 
//   useEffect(() => {
//     axios.get('https://api.escuelajs.co/api/v1/products')
//       .then(res => {
//         const chunkData = chunk(res.data, chunkSize);
//         setProductChunks(chunkData);
//       })
//       .catch(err => console.log(err));
//   }, [chunkSize]);
// 
//   return productChunks;
// }

//============================STATIC JSON=====================================================

// ===========all data============
export function allData() {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    setProduct(product_data);
  })
  return product;
}

// ===========chunk data============
export function chunkedData(chunkSize) {
  const [productChunks, setProductChunks] = useState([]);

  useEffect(() => {
        const chunkData = chunk(product_data, chunkSize);
        setProductChunks(chunkData);
  }, [chunkSize]);

  return productChunks;
}