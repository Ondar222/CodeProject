import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Блокируем прокрутку страницы при открытом меню
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-container">
          <img src="/img/logo.png" alt="Logo" width={64} height={25} />
          <div
            className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <button className="close-menu" onClick={toggleMenu}>
                <X size={32} />
              </button>
              <a href="#features" onClick={toggleMenu}>
                Чему научитесь
              </a>
              <a href="#gallery" onClick={toggleMenu}>
                Процесс обучения
              </a>
              <a href="#contacts" onClick={toggleMenu}>
                Стоимость
              </a>
              <a href="#contacts" onClick={toggleMenu}>
                Контакты
              </a>

              {/* Ссылка "Регистрация" только в мобильной версии */}
              <a href="/register" className="mobile-only" onClick={toggleMenu}>
                Регистрация
              </a>
            </div>
          </div>
        </div>

        <div className="nav-phone">
          <a className="phone" href="tel:+7 (499) 348 93 96">
            +7 (499) 348 93 96
          </a>

          {/* Бургер-меню для мобильных устройств */}
          <button className="burger-menu" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
