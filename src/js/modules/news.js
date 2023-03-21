import Swiper from "swiper";

const news = () => {
    const swiper = new Swiper('.news__blocks__row', {    
        // Navigation arrows
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true
    });
};


export default news;