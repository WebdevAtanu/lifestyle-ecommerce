import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Banner() {
	return (
		<div className='bg-gray-200 p-3'>
			<Splide options={{
    			type: 'loop',
    			gap: '1rem',
    			autoplay: true,
    			interval: 100,
    			perPage: 1,
        		pagination: true,
        		arrows: true,
        		speed: 1000,
        		easing: "cubic-bezier(0.5, 0, 0.5, 1)"}}>
			  <SplideSlide>
			  <div className='banners'>
			    <img src="banner/b3.jpg" alt="Image 2"/>
			    </div>
			  </SplideSlide>
			  <SplideSlide>
			  <div className='banners'>
			    <img src="banner/b2.jpg" alt="Image 1"/>
			  </div>
			  </SplideSlide>
			  <SplideSlide>
			  <div className='banners'>
			    <img src="banner/b1.jpg" alt="Image 2"/>
			    </div>
			  </SplideSlide>
			  <SplideSlide>
			  <div className='banners'>
			    <img src="banner/b4.jpg" alt="Image 2"/>
			    </div>
			  </SplideSlide>
			  <SplideSlide>
			  <div className='banners'>
			    <img src="banner/b5.jpg" alt="Image 2"/>
			    </div>
			  </SplideSlide>
			</Splide>
		</div>
	)
}

export default Banner