import React from "react";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import "./styles/App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Support } from "./components/Support";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <Features />
        <Support />
        <Gallery />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
