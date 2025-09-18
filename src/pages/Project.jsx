import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Build & Launch Without Problems",
        image: "/images/Project1.png",
    },
    {
        title: "Seamless Collaboration",
        image: "/images/Project2.png",
    },
    {
        title: "Creative Design Showcase",
        image: "/images/Project3.png",
    },
    {
        title: "Seamless Collaboration",
        image: "/images/Project4.png",
    },
    {
        title: "Creative Design Showcase",
        image: "/images/Project5.png",
    },
    {
        title: "Marketing Growth Strategy",
        image: "/images/Project6.png",
    },
];

const Project = () => {
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
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Project;
