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
        <div className="star-black-gradient bg-cover bg-no-repeat bg-center">
          <About />          
          <Experience />
        </div> 
        <div className="black-orange-gradient bg-cover bg-no-repeat bg-center">
          <Tech />
          <Works />
        </div>
        <div className='black-green-gradient'>
          <Feedbacks />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
