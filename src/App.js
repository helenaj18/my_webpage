import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ResumeComponent from './components/Resume';
import HomepageComponent from './components/homepage';
import ProjectsComponent from './components/projects';
import NavbarComponent from './components/navbar';
import AboutMeComponent from './components/about_me';
import HeimaleikarnirComponent from './components/heimaleikarnir';
import PortaplantsComponent from './components/portaplants';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomepageComponent/>}/>
        <Route path="/resume" element={<ResumeComponent/>}/>
        <Route path="/portaplants" element={<PortaplantsComponent/>}/>
        <Route path="/projects" element={<ProjectsComponent/>}/>
        <Route path="/about_me" element={<AboutMeComponent/>}/>
        <Route path="/heimaleikarnir" element={<HeimaleikarnirComponent/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
