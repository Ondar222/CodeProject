import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ContactModal from "./ContactModal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Banner.css";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slides = [
    {
      title: (
        <>
          Школа <span className="yellow-quote">{"{"}</span>
          {""}
          <b className="programming-text">программирования</b>
          <span className="yellow-quote">{"}"}</span> для тех, кому нужны
          реальные навыки,
          <br /> а не просто сертификат
        </>
      ),
      subtitle:
        "Закажите звонок, и наш специалист свяжется с вами в ближайшее время",
      image: "/img/bannerImg1.png",
    },
    {
      title: "Обучение через практику",
      subtitle:
        "Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.",
      image: "/img/bannerImg2.png",
    },
    {
      title: "Весь материал разбит на небольшие уроки",
      subtitle:
        "Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.",
      image: "/img/bannerImg3.png",
    },
  ];

  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <div className="banner-content">
                {/* Текстовая часть */}
                <div className="text-content">
                  <h1>{slide.title}</h1>
                  <hr className="title-line" />
                  <p>{slide.subtitle}</p>
                  <button
                    className="contact-button"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <img src="/img/call.svg" alt="Заказать звонок" />
                  </button>
                </div>
                {/* Изображение внутри слайда, которое меняется */}
                <div className="image-content">
                  <img src={slide.image} alt={`Slide image ${index + 1}`} />
                </div>
              </div>
              <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
