import Swiper from "swiper";

const news = () => {
    const swiper = new Swiper('.news__blocks__row', {    
        // Navigation arrows
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            769: {
                slidesPerView: 3
            }
        }
    });
};


export default news;