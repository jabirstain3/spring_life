import { Swiper, SwiperSlide } from 'swiper/react';
import './DisplayPartners.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';

export const DisplayPartners = () => {
    const banners = [
        {image: "https://www.lifespringint.com/wp-content/uploads/2023/11/5.png.webp", id: 12300421 },
        {image: "https://www.lifespringint.com/wp-content/uploads/2023/11/10.png.webp", id: 12300423 },
        {image: "https://www.lifespringint.com/wp-content/uploads/2023/11/13.png.webp", id: 12300423 },
        {image: "https://www.lifespringint.com/wp-content/uploads/2023/11/2.png.webp", id: 12300424 },
    ]
    return (
        <div className="mx-auto flex justify-center bannercontainer2">
            <Swiper
            // install Swiper modules
            modules={[ Pagination, Autoplay]}
            watchSlidesProgress={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
            }}
            className="swiper2 "
            >
                {
                    banners.map((bnr) =>(
                        <SwiperSlide className='swiper-slide2' >
                            <div key={bnr.id} className="">
                                <img src={bnr.image} className='w-[140px] mx-auto aspect-square shadow-md'/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};