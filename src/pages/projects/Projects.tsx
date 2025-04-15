import './Projects.css';
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Project 1",
            description: "Brief description of project 1.",
            details: "Detailed information about project 1. This project was built using React, Node.js, and MongoDB. It includes features like authentication, real-time updates, and more.",
        },
        {
            title: "Project 2",
            description: "Brief description of project 2.",
            details: "Detailed information about project 2. This project focuses on frontend development with advanced animations and responsive design using CSS and JavaScript.",
        },
        {
            title: "Project 3",
            description: "Brief description of project 3.",
            details: "Detailed information about project 3. This project is a full-stack application with a focus on scalability and performance optimization.",
        },
    ];

    const handleToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="projects-page" id="projects">
            <h1>Projects</h1>
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
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;