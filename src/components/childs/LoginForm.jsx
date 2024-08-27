import React,{useState} from 'react';
import {useFormik} from 'formik';
import {loginValidation} from './formValidation';
import {toast} from 'react-toastify';

function LoginForm() {
	const formik=useFormik({
		initialValues:{
			email:'',
			password:''
		},
		validationSchema:loginValidation,
		onSubmit:(data,action)=>{
			console.log(data);
			action.resetForm();
			toast.success('Welcome', {
			position: "top-center",
			autoClose: 500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			})
		}
	})

	const [flag,setFlag]=useState(false);
	const showPassword=()=>{
		setFlag(!flag);
	}
	return (
		<div className='border border-black px-5 rounded'>
		<p className='text-center p-2 bg-blue-800 rounded-b-2xl text-white'>LOGIN</p>
			<form className='flex flex-col gap-2 p-5' onSubmit={formik.handleSubmit}>
				<input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder='johndoe@gmail.com' className='border border-gray-600 outline-0 px-2 py-1'/>
				<span className='text-sm text-red-500'>
					{formik.errors.email && formik.touched.email? formik.errors.email:<p> </p>}
				</span>
				<div className='flex gap-1 items-center border border-gray-600'>
				<input type={flag?'text':'password'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder='your password' className='outline-0 px-2 py-1'/>
				{flag?<span className='px-2 py-1' onClick={showPassword}><i className="bi bi-eye-slash"></i></span>:<span className='px-2 py-1' onClick={showPassword}><i className="bi bi-eye"></i></span>}
				</div>
				<span className='text-sm text-red-500'>
					{formik.errors.password && formik.touched.password? formik.errors.password:<p> </p>}
				</span>
				<button type='submit' className='bg-blue-700 px-2 py-1 mt-3 text-white self-center'>Login</button>
			</form>
		</div>
	)
}

export default LoginForm