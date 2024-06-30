import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroComponents/Hero";
import Video from "./components/Video/Video";
import Benifits from "./components/Benifits/Benifits";
import Gallery from "./components/Gallery/Gallery";
import Specs from "./components/Specs/Specs";
import TopBtn from "./components/TopBtn/TopBtn";
import TypeOfDrones from "./components/TypeOfDrones/TypeOfDrones";
import { useDarkContext } from "./context/DardMode";
import Footer from "./components/Footer/Footer";
import CreatedBy from "./components/CreatedBy/CreatedBy";

function App() {
  const { dark } = useDarkContext();
  return (
    <div className={` w-full h-auto ${!dark ? "bg-[#0B0F19]" : "bg-white"}`}>
      {/* <TopBtn /> */}
      <Navbar />
      <Hero />
      <Video />
      <Benifits />
      <Gallery />
      <Specs />
      <TypeOfDrones />
      <Footer />
      <CreatedBy />
    </div>
  );
}

export default App;
