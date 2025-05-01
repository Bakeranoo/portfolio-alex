import './Projects.css';

const Projects = () => {
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

    return (
        <div className="projects-page">
            <h1 className="section-title">Proyectos</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-front">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="project-card-back">
                            <p className="project-details">{project.details}</p>
                            <p><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
                            {project.link && (
                                <button
                                    className="project-link"
                                    onClick={() => window.open(project.link, "_blank")}
                                >
                                    Ver Proyectos
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;