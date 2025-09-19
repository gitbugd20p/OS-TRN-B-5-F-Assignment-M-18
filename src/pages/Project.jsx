import { useEffect, useState } from "react";
import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import ProjectCard from "../components/ProjectCard";
import { getAllProject } from "../api/allProjectApi";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getAllProject(); // API call
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="bg-white pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 pb-12">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="ALL PROJECTS"
                    headerTitle="Better Agency/SEO Solution At Your Fingertips"
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                liveLink={project.live} // ✅ New prop
                            />
                        ))
                    ) : (
                        <p>Loading projects...</p>
                    )}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Project;
