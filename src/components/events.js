// Import Swiper React components
import React from 'react'

// include images
import slideImage1 from '../images/event/1.jpg';
import slideImage2 from '../images/event/2.jpg';
import slideImage3 from '../images/event/3.jpg';
import slideImage4 from '../images/event/4.jpg';
import slideImage5 from '../images/event/5.jpg';
import slideImage6 from '../images/event/6.jpeg';
import slideImage7 from '../images/event/7.jpeg';
import slideImage8 from '../images/event/8.jpg';
import slideImage9 from '../images/event/9.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// include swiper css
import "swiper/swiper-bundle.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"


SwiperCore.use([Navigation, Scrollbar ]);

 const Events =  () => {
  return (
      <>
         <div className = "jumbotron m-0">
            <h3 className = "text-center p-5"> <b> All Events </b> </h3>
         
         <div  className = "swiper-container" >
         <Swiper
            slidesPerView = {3}
            spaceBetween = {50}
            navigation = {true}
            scrollbar = {{"hide": true}}
            className="mySwiper"
            
         >
             <SwiperSlide className = "swiper-slide"> <img src = {slideImage1} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage2} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage3} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage4} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage5} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage6} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage7} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage8} />  </SwiperSlide>
             <SwiperSlide className = "swiper-slide" > <img src = {slideImage9} />  </SwiperSlide>




         </Swiper>
         </div>
         </div>

      </>

  );
}


export default Events;