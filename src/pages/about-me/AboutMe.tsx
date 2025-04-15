import './AboutMe.css';
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const AboutMe = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const highlights = [
        {
            title: "Presentación",
            content: "¡Hola! Soy Àlex Agustí, desarrollador full-stack con más de dos años de experiencia en desarrollo web. Aunque trabajo tanto en frontend como en backend, lo que realmente disfruto es el frontend, donde puedo dar vida a las ideas a través del código.",
        },
        {
            title: "Formación",
            content: "Me formé en Desarrollo de Aplicaciones Multiplataforma (DAM), con un enfoque orientado al desarrollo de videojuegos. Esa base me dio una forma distinta de ver los proyectos, con atención al detalle y al rendimiento.",
        },
        {
            title: "Aprendizaje",
            content: "Siempre estoy buscando aprender algo nuevo. Me encanta enfrentarme a desafíos que me saquen de la rutina.",
        },
        {
            title: "A nivel de desarrollo",
            content: "Me interesa todo lo relacionado con el desarrollo técnico. Desde crear interfaces dinámicas hasta construir funcionalidades complejas.",
        },
        {
            title: "Videojuegos",
            content: "Siempre me han apasionado los videojuegos y por eso decidí formarme para poder conocer más sobre su desarrollo.",
        },
        {
            title: "Hobbies",
            content: "Soy un apasionado de los deportes, especialmente el fútbol y el baloncesto. También me encantan las cosas relativas al espacio y la astronomía.",
        },
        {
            title: "Conclusión",
            content: "Soy alguien curioso, con mentalidad de mejora constante y muchas ganas de seguir creciendo como desarrollador y como persona. Siempre busco aportar valor real a los proyectos en los que trabajo.",
        },
    ];

    const handleToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="about-me">
            <h1 className="about-me-title">Sobre mí</h1>
            <div className="about-me-cards">
                {highlights.map((highlight, index) => (
                    <Card
                        key={index}
                        title={highlight.title}
                        className="about-me-card"
                        footer={
                            <Button
                                label={expandedIndex === index ? "Mostrar menos" : "Mostrar más"}
                                icon={`pi ${expandedIndex === index ? "pi-chevron-up" : "pi-chevron-down"}`}
                                onClick={() => handleToggle(index)}
                                className="p-button-text"
                            />
                        }
                    >
                        {expandedIndex === index && (
                            <div className="about-me-content">
                                <p>{highlight.content}</p>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;