import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import GiftCard from "./components/GiftCard";
import './App.css';
import Inspiration from "./components/Inspiration";
import Experiences from "./components/Experiences";
import Superhost from "./components/Superhost";
import FutureGetaways from "./components/FutureGetaways";
import Footer from "./components/Footer";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const App = () => {
  return (
    <div className="font-poppins text-white">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Gift Card */}
      <GiftCard />

      {/* Inspiration */}
      <Inspiration />

      {/* Experiences */}
      <Experiences />

      {/* Superhost */}
      <Superhost />

      {/* Future Getaways */}
      <FutureGetaways />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
