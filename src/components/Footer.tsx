import "../styles/Footer.css";
import { FaInstagram, FaVk, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column logo-section">
          <div className="logo-text">
            <img src="/img/logoFooter.png" alt="Logo" width={96} height={38} />
            <p>Школа программирования</p>
          </div>
          <div className="messengers">
            <FaInstagram size={35} />
            <FaVk size={35} />
            <FaFacebook size={35} />
            <FaYoutube size={35} />
          </div>
        </div>

        {/* Второй и третий ряды: Ссылки и контактная информация */}
        <div className="footer-links-contact">
          <div className="footer-info-text">
            <ul>
              <li>Чему вы научитесь</li>
              <li>Процесс обучения</li>
              <li>Стоимость</li>
              <li>Контакты</li>
              <li>Регистрация</li>
            </ul>
          </div>
          <div className="footer-contacts">
            <a className="phoneFooter" href="tel:+7 (499) 348 93 96">
              +7 (499) 348 93 96
            </a>

            <a className="email" href="mailto:info@code.ru">
              info@code.ru
            </a>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <p>© 2023 — Все права защищены</p>
        <div className="footer-bottom-end">
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
