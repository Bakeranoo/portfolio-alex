import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import BaseSchema from './components/base-schema/BaseSchema';
import AboutMe from './pages/about-me/AboutMe';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

/**
 * Función principal de la aplicación	
 * @returns JSX.Element
 * @description Esta función es la entrada principal de la aplicación.
 */
function App() {
  const [theme] = useState<'light' | 'dark'>('light');

  // Cambiar el tema de la aplicación
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Función que renderiza la aplicación
  const renderApp = () => {
    return (
      <div className="app">
        <BaseSchema
          content={
            <div className="content">
              <div id='home' className='content-window'><Home /></div>
              <div id='about' className='content-window'><AboutMe /></div>
              <div id='projects' className='content-window'><Projects /></div>
              <div id='contact' className='content-window'><Contact /></div>
              {/* Agrega más secciones aquí si es necesario */}
            </div>
          }
        />
      </div>
    );
  };

  return renderApp();
}

export default App;
