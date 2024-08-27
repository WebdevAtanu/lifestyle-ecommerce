import React from 'react'

function Footer() {
	return (
		<>
		<div className='grid grid-cols-2 md:grid-cols-4 md:gap-3 mt-5 p-5 bg-slate-800 text-white gap-5 footers'>
			<div>
				<h5 className='mb-4 text-xl'>About</h5>
				<ul className='flex flex-col gap-3 text-sm'>
					<li>About Us</li>
					<li>Careers</li>
					<li>Lifestyle Stories</li>
					<li>Corporate Information</li>
					<li>Press</li>
				</ul>
			</div>
			<div>
				<h5 className='mb-4 text-xl'>Consumer Policy</h5>
				<ul className='flex flex-col gap-3 text-sm'>
					<li>Cancellation & Returns</li>
					<li>Report Infringement</li>
					<li>Grievance Redressal</li>
					<li>EPR Compliance</li>
					<li>Terms Of Use</li>
				</ul>
			</div>
			<div>
				<h5 className='mb-4 text-xl'>Contact Us</h5>
				<p className='text-sm'>Lifestyle Company Private Limited, Buildings Cosmos, Gstaad & Stark Tower Tech Village, Outer Marvel Road, Wakanda Village, 560103, USA</p>
			</div>
			<div>
				<h5 className='mb-4 text-xl'>Office Address</h5>
				<p className='text-sm'>Lifestyle Company Private Limited, Buildings Cosmos, Gstaad & Stark Tower Tech Village, Outer Marvel Road, Wakanda Village, 560103, USA</p>
			</div>
		</div>
		<div className='bg-slate-800 text-center text-white p-3'><p>Lifestyle @ 2024 | All rights reserved</p></div>
		</>
	)
}

export default Footer