import "../styles/Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <div className="map-container__map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc6d113224bf073f3aa03ed7bb462dabfbc201044c5c5006b535255e5f205b88&amp;source=constructor"
          width="1160"
          height="423"
          frameBorder="0"
          title="Yandex Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
