import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';

export const BannerSlide = () => {
    const banners = [
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.i_m61dW95EPhEsn_PIwO-gHaD4%3Fcb%3Diwc2%26pid%3DApi&f=1&ipt=47ac903dee7cd0e32f35b9f60bbb0e6108afb8dd55ccccd3e5683389d003e8c7&ipo=images", id: 12300421 },
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-lJK-lgu3B_0%2FYProC3wxExI%2FAAAAAAAAAto%2F-ND-hmNxBwstFz9HTZ4gXsHs-dS4BTVhACLcBGAsYHQ%2Fs2048%2FJobberman_Preparing_for_Interviews_FB-2.png&f=1&nofb=1&ipt=f9e5753e355a7b1e790d0164fcc50fbe71e54f7a1774f3cfa68d348bbc716054", id: 12300423 },
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%2Fid%2FOIP.jHLybIwIzOY8B6iW_qvo2AHaEJ%3Fcb%3Diwc2%26pid%3DApi&f=1&ipt=1e0ecc726cf0239164d52f6d50d573da0bf4c6287436441f44de4073518b699c&ipo=images", id: 12300423 },
        {image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimages%2Ft_main1%2Cq_auto%2Cf_auto%2Cq_auto%2Cf_auto%2Fgigs%2F289379872%2Foriginal%2F517bf31bffe42913af11ff7cf36c7385f8e51260%2Fprovide-professional-resume-cv-cover-letter-writting-for-your-dream-job.png&f=1&nofb=1&ipt=b22a4a7d16cc4d38063f57b3e61f063f553184e6b3b2d98e8063c93140b45bee", id: 12300424 },
    ]
    return (
        <div className="w-full bannercontainer">
            <Swiper
            // install Swiper modules
            modules={[ Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
            }}
            >
                {
                    banners.map((bnr) =>(
                        <SwiperSlide >
                            <div key={bnr.id} className=" w-full h-full flex justify-center bg-neutral-200">
                                <img src={bnr.image} className='w-full max-w-[1600px] h-full max-h-[700px] aspect-[19/10]'/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};