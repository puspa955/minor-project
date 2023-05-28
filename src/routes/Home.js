import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/1.jpg";




function Home (){
   return(
    <>
    <Navbar />
    <Hero
    cName="hero" HeroImg={HeroImg}
    title="Compress your file here"
   
    
    buttonText="want more?"
    url="/"
    btnClass="show"
    
    />

    
   
    <Footer/>
    
    </>
   );
}

export default Home;