import React from "react";

const Projects = () => {
    const projects = [
        { id: 1, title: "Portfolio Website", description: "A personal portfolio built with React and Tailwind CSS." },
        { id: 2, title: "E-commerce App", description: "A mobile-friendly app for an online store." },
        { id: 3, title: "Blog Platform", description: "A blogging platform using Node.js and React." },
    ];

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-700">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
