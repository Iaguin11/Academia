
import ContatcSection from "./components/Contatc/ContatcSection";
import Even from "./components/Even";
import Footer from "./components/Footer";
import SectionFour from "./components/FourSection/SectionFour";
import HomePage from "./components/HomePage";
import SecondSection from "./components/SecondSection/SecondsSection";
import SectionThird from "./components/ThirdSection/SectionThird";

export default function App(){
  return(
    <>
      <HomePage>
      </HomePage>
      <Even/>
      <SecondSection/>
      <SectionThird/>
      <SectionFour/>
      <ContatcSection/>
      <Footer/>
    </>
    
  )
}