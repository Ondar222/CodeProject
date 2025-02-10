import React, { useEffect } from "react";
import "../styles/Map.css";

const Map: React.FC = () => {
  const center = [54.980142, 82.897008]; // Координаты для г. Новосибирск, ул. Депутатская, 46

  useEffect(() => {
    const scriptId = "yandex-maps-script";

    // Проверяем, есть ли уже загруженный скрипт
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=4e82b184-8aef-49ee-a2c0-0bd44e47e57c&lang=ru_RU";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initMap();
      };
    } else {
      // Если API уже загружен, сразу инициализируем карту
      if (window.ymaps) {
        window.ymaps.ready(initMap);
      }
    }

    function initMap() {
      const map = new window.ymaps.Map("map-test", {
        center: center,
        zoom: 17,
      });

      // Удаление ненужных элементов управления
      map.controls.remove("geolocationControl");
      map.controls.remove("searchControl");
      map.controls.remove("trafficControl");
      map.controls.remove("typeSelector");
      map.controls.remove("fullscreenControl");
      map.controls.remove("zoomControl");
      map.controls.remove("rulerControl");
      map.behaviors.disable(["scrollZoom"]);

      // Добавляем метку на карту
      const placemark = new window.ymaps.Placemark(center, {
        hintContent: "г. Новосибирск, ул. Депутатская, 46",
        balloonContent: "Адрес: г. Новосибирск, ул. Депутатская, 46",
      });

      map.geoObjects.add(placemark);
    }

    return () => {
      // Удаляем карту, если компонент размонтируется
      const map = document.getElementById("map-test");
      if (map) {
        map.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="map">
      <div id="map-test" className="map-container"></div>
    </div>
  );
};

export default Map;
