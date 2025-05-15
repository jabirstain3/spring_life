import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import Swiper styles
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
        <div className="sectionBase mx-auto flex justify-center">
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
            className="mySwiper"
            >
                {
                    banners.map((bnr) =>(
                        <SwiperSlide >
                            <div key={bnr.id} className="w-[180px] my-6 p-6">
                                <img src={bnr.image} className='w-full aspect-square shadow-md'/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};