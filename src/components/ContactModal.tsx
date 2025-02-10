import React from "react";
import "../styles/ContactModal.css";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h3>Заказать звонок</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" placeholder="ваше  имя" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              placeholder="+7 ХХХ - ХХХ - ХХ -ХХ"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="mail@site.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              className="form-group-message"
              id="message"
              placeholder="Ваше сообщение ..."
              rows={4}
              required
            />
          </div>
          <div className="privacy">
            Нажимая кнопку “Отправить”, соглашаюсь с{" "}
            <span>политикой конфидениальности</span>
          </div>

          <button type="submit" className="primary-button">
            <img src="/img/submit.svg" alt="Отправить" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
