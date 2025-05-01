import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
    const highlights = [
        {
            title: "Formación",
            content: "Me formé en Desarrollo de Aplicaciones Multiplataforma (DAM), con un enfoque orientado al desarrollo de videojuegos. Esa base me dio una forma distinta de ver los proyectos, con atención al detalle y al rendimiento.",
        },
        {
            title: "Experiencia profesional",
            content: "Empezé como becario en la empresa GMV (donde actualmente trabajo) y he tenido la oportunidad de participar en varios proyectos. He trabajado en el desarrollo de aplicaciones web, tanto en front como en back-end, lo que me ha permitido adquirir muchos conocimientos.",
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

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="about-me">
            <h1 className="section-title">Algunas cosas sobre mí</h1>
            <div className="about-me-accordion">
                {highlights.map((highlight, index) => (
                    <div
                        key={index}
                        className={`about-me-accordion-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="about-me-accordion-title">{highlight.title}</div>
                        <div className="about-me-accordion-content">{highlight.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;