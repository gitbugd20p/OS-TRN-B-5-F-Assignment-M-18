import { useEffect, useState } from "react";
import HSubHOfDiv from "./HSubHOfDiv";
import { getFeaturedProject } from "../api/featuredProject";

const FeaturedProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getFeaturedProject(); // API call
                setProjects(data);
            } catch (error) {
                console.error("Error fetching featured projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="bg-[#F0FDF4] py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="FEATURED PROJECT"
                    headerTitle="We provide the Perfect Solution to your business growth"
                />

                {/* Grid Layout */}
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column (Big Card - First Project) */}
                        <div className="rounded-lg p-6 flex flex-col">
                            <img
                                src={projects[0].image}
                                alt={projects[0].title}
                                className="w-full h-full object-cover rounded-md mb-6"
                            />
                            <p
                                className="text-gray-600 text-sm opacity-80 mb-2"
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "26px",
                                }}
                            >
                                App Design -{" "}
                                {new Date(
                                    projects[0].created_at
                                ).toLocaleDateString()}
                            </p>
                            <h3
                                className="text-gray-900 mb-4"
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "700",
                                    fontSize: "24px",
                                    lineHeight: "28px",
                                }}
                            >
                                {projects[0].title}
                            </h3>
                        </div>

                        {/* Right Column (4 Cards Grid - Rest Projects) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {projects.slice(1, 5).map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg p-4 flex flex-col"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                    <p
                                        className="text-gray-600 text-sm opacity-80 mb-1"
                                        style={{
                                            fontFamily: "Poppins",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "26px",
                                        }}
                                    >
                                        App Design -{" "}
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <h3
                                        className="text-gray-900"
                                        style={{
                                            fontFamily: "Poppins",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                            lineHeight: "26px",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
        </section>
    );
};

export default FeaturedProject;
