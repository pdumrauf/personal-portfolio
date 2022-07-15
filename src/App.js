import './App.css';
import { useRef } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { DownloadCV } from './components/DownloadCV';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const contactRef = useRef(null);

  return (
    <div className="App">
      <NavBar contactRef={contactRef}/>
      <Banner />
      <Skills />
      <Projects />
      <Contact ref={contactRef}/>
      <DownloadCV />
    </div>
  );
}

export default App;
