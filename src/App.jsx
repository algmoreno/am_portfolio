import { BrowserRouter } from "react-router-dom";
import { SaguaroCanvas } from './components/canvas';
import { About, Contact, Experience, Feedbacks, 
        Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />          
        </div>         */}
        <div className='relative'>
          <StarsCanvas />
          <Navbar />
          <Hero />          
        </div>     
        <div className="star-navy-gradient bg-cover bg-no-repeat bg-center">
          <About />          
        </div> 
        <div className="navy-lightblue-gradient bg-cover bg-no-repeat bg-center">
          <Experience />
          <Tech />
        </div>
        <div className='lightblue-orange-gradient'>
          {/* <Feedbacks /> */}
          <Works />
          <Contact />          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
