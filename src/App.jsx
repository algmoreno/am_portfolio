import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, 
        Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />          
        </div>         */}
        <div className='green-black-gradient'>
          <Navbar />
          <Hero />          
        </div>     
        <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center">
          <About />          
        </div> 
        <div className="black-orange-gradient bg-cover bg-no-repeat bg-center">
          <Experience />
          <Tech />
          <Works />
        </div>
        <div className="bg-hero-pattern2 bg-cover bg-no-repeat bg-center">
        </div> 
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
