import { BrowserRouter } from 'react-router-dom';
import { Airquality, Breathebot, Breathingex, Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div id="airquality" className="airquality"><Airquality /></div>
        <div id="breathingexercise" className="breathingexercise"><Breathingex  /></div>
        <div id="breathebot" className="breathebot"><Breathebot /></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
