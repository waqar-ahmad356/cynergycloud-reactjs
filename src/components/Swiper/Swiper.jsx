import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "./MySwiper.css"; // Custom styles
import testimonial_icon from "../../assets/testimonial-icon.png";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <Swiper
        spaceBetween={22}
        slidesPerView={5} // Show 5 slides on larger screens
        centeredSlides={true} // Center the active slide
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop={true} // Enable looping
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5, // Show 5 slides on larger screens
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial_icon}
                alt={`Client ${index + 1}`}
                className="card-image"
              />
              <p className="card-content ">
                Our remote team finally feels connected. The channels and
                integrations make it so easy to keep everyone on the same page!
              </p>
              <div className="card-author">
                <p> Jhone Company XYZ</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
