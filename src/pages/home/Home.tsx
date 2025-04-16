import { Button } from 'primereact/button';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Hola, soy Àlex Agustí<br/>Desarrollador de videojuegos y aplicaciones web.<br/>¡Bienvenido a mi portfolio!</h1>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button label="Ver proyectos" className="p-button-outlined" onClick={() => window.location.hash = '#projects'} />
                <Button label="Descargar CV" className="p-button-outlined" onClick={() => window.location.hash = '#about'} />
            </div>
            {/*<Background contentSrc='' contentType='game' />*/}
        </div>
    );
};

export default Home;