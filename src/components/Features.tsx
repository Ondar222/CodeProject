import React from "react";
import "../styles/Features.css";

const Features = () => {
  const images = [
    {
      image: "/img/practiceIcon.png",
      title: "Огромное количество практики",
      description:
        "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      image: "/img/methodIcon.png",
      title: "Современные методики обучения",
      description:
        "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
    },
    {
      image: "/img/expositionIcon.png",
      title: "Простое и понятное изложение",
      description: "Вместо заумных терминов – примеры из реального мира",
    },
    {
      image: "/img/scheduleIcon.png",
      title: "Гибкий график занятий",
      description: "Учитесь в любое время в удобном для вас темпе",
    },
    {
      image: "/img/connectionIcon.png",
      title: "Прямая связь с опытными программистами",
      description: "Задавайте вопросы и отправляйте свой код на проверку",
    },
    {
      image: "/img/paymentIcon.png",
      title: "Оплата небольшими частями",
      description:
        "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу",
    },
    {
      image: "/img/returnIcon.png",
      title: "Быстрый и легкий возврат",
      description: "Если передумаете учиться – вернем деньги за 3 рабочих дня",
    },
  ];

  return (
    <section className="features">
      <h2>Обучение в CoDe – это удобно и результативно</h2>
      <div className="features-grid">
        {images.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
