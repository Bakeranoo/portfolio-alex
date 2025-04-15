import { useEffect, useState, useRef } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { Assets } from 'pixi.js';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0); // Controla la sección actual

  const sectionsRef = useRef<HTMLDivElement[]>([]); // Referencias a las secciones

  const assets = [
    '/sprites/player/sprite_0.png',
    '/sprites/player/sprite_1.png',
    '/sprites/player/sprite_2.png',
    '/sprites/player/sprite_3.png',
    '/sprites/map/map.png',
  ];

  // Cambiar el tema de la aplicación
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Cargar los assets al iniciar la aplicación
  useEffect(() => {
    Assets.load(assets).then(() => {
      setAssetsLoaded(true);
    });
  }, []);

  // Función para manejar el scroll del ratón
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const deltaY = (event as any).deltaY;
    if (deltaY > 0 && currentSection < sectionsRef.current.length - 1) {
      // Scroll hacia abajo
      setCurrentSection((prev) => prev + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      // Scroll hacia arriba
      setCurrentSection((prev) => prev - 1);
    }
  };

  // Efecto para hacer scroll suave a la sección actual
  useEffect(() => {
    sectionsRef.current[currentSection]?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  // Función que renderiza la aplicación
  const renderApp = () => {
    // Si los assets no están cargados, muestra una pantalla de carga
    if (!assetsLoaded) {
      return <div className="loading-screen">Loading...</div>;
    }

    // Renderiza la aplicación con el esquema base
    // y las secciones de contenido
    // Se utiliza el esquema base para mantener la estructura de la aplicación
    // y se pasan las secciones de contenido como props
    return (
      <div className="app" onWheel={handleScroll}>
        <BaseSchema
          content={
            <div className="content">
              <div className='content-window' ref={(el) => { sectionsRef.current[0] = el!; }}><Home /></div>
              <div className='content-window' ref={(el) => { sectionsRef.current[1] = el!; }}><AboutMe /></div>
              <div className='content-window' ref={(el) => { sectionsRef.current[2] = el!; }}><Projects /></div>
              <div className='content-window' ref={(el) => { sectionsRef.current[3] = el!; }}><Contact /></div>
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
