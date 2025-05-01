import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h2 className="section-title">Una breve introducción</h2>
                <p className="home-paragraph">
                    Hola, me llamo ÂLEX AGUSTÍ MONCASI. Me dedico a la programación y desarrollo de software. Esta web creada en REACT es mi portfolio personal.
                    En este portfolio, encontrarás una selección de mis proyectos y trabajos más destacados. Mi objetivo es mostrarte mis habilidades y experiencia en el campo del desarrollo web y de los videojuegos.
                </p>
                <div className="home-placeholder-text">
                    <div className="example-line"></div>
                    <div className="example-line short"></div>
                    <div className="example-line"></div>
                    <div className="example-line"></div>
                    <div className="example-line short"></div>
                </div>
                <p className="home-paragraph">
                    Espero que disfrutes de la visita y que encuentres lo que buscas. ¡Gracias por estar aquí!
                </p>
                
            </div>
            <img src="/images/portfolio.png" alt="Portfolio" className="home-image" />
        </div>
    );
};

export default Home;