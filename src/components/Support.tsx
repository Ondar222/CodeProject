import React from "react";
import "../styles/Support.css";

export const Support = () => {
  return (
    <>
      <section className="content-section">
        <div className="row">
          <div className="support_block">
            <img
              src="/supportImg1.png"
              alt="Помощь и поддержка"
              width={398}
              height={290}
            />
          </div>
          <div className="text-block">
            <h3>Помощь и поддержка</h3>
            <p>
              Если в процессе обучения возникнут сложности, вы всегда сможете
              задать вопрос своему наставнику.
            </p>
            <p>
              Раз в несколько уроков вы будете получать большое задание, которое
              нужно будет сдавать на проверку код-ревьюеру. Он внимательно
              изучит ваш код, найдет ошибки и поможет вам стать лучше.
            </p>
          </div>
        </div>

        <div className="row_reverse">
          <div className="text-block">
            <h3>Методика обучения</h3>
            <p>
              Весь учебный материал структурирован по принципу «спирального
              обучения». Сначала вы получаете базовые знания, а затем на каждом
              витке спирали углубляетесь в изученные темы, доводя их понимание
              до совершенства. Такой подход упрощает обучение и гарантирует, что
              вы не пропустите ничего важного.
            </p>
          </div>
          <div className="support_block">
            <img
              src="/supportImg2.png"
              alt="Методика обучения"
              width={398}
              height={290}
            />
          </div>
        </div>
      </section>
    </>
  );
};
