import './Projects.css';
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


    const projects = [
        {
            title: "En Clave Formativa",
            description: "Proyectos realizados durante mi formación.",
            details: "Los proyectos formativos incluyen una variedad de aplicaciones y juegos desarrollados con Unity. Cada proyecto tiene un enfoque diferente, desde la creación de entornos 3D hasta la implementación de mecánicas de juego complejas.",
            technologies: ["Unity", "C#", "Blender"],
            link: "https://drive.google.com/drive/folders/1ll0E85VZopMhQVoutAt9EV_jH3c9V-Hz?usp=sharing",
        },
        {
            title: "En Clave Laboral",
            description: "Proyectos realizados en el ámbito laboral.",
            details: "En el ámbito laboral, he trabajado en proyectos web para diversas empresas, incluyendo la ESA y el Tesoro Público. Estos proyectos abarcan desde aplicaciones de gestión hasta plataformas de análisis de datos.",
            technologies: ["React", "Angular", "Typescript", "Node.js", "Java", "Spring", "JSP", "HTML", "CSS"],
        },
        {
            title: "En Clave Personal",
            description: "Proyectos personales y de ocio.",
            details: "He desarrollado varios proyectos personales que reflejan mis intereses y habilidades. Estos incluyen juegos independientes y aplicaciones experimentales, donde he podido explorar nuevas tecnologías y enfoques creativos.",
            technologies: ["Unity", "C#", "React", "Unreal Engine"],
        },
    ];

    const handleToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="projects-page" id="projects">
            <h1>Proyectos</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        subTitle={project.description}
                        className="project-card"
                        footer={
                            <Button
                                label={expandedIndex === index ? "Show Less" : "Show More"}
                                icon={`pi ${expandedIndex === index ? "pi-chevron-up" : "pi-chevron-down"}`}
                                onClick={() => handleToggle(index)}
                                className="p-button-text"
                            />
                        }
                    >
                        {expandedIndex === index && (
                            <div className="project-details">
                                <p>{project.details}</p>
                                <p><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
                                {project.link && (
                                    <Button
                                        label="Ver Proyectos"
                                        icon="pi pi-link"
                                        onClick={() => window.open(project.link, "_blank")}
                                        className="p-button-text"
                                    />
                                )}
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;