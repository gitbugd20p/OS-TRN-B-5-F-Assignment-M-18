import HSubHOfDiv from "./HSubHOfDiv";

const projectData = [
    {
        img: "/images/FP.png",
        subtitle: "App Design - June 20, 2022",
        title: "App Redesign",
    },
    {
        img: "/images/FP1.png",
        subtitle: "App Design - June 20, 2022",
        title: "Redesign channel website landing page",
    },
    {
        img: "/images/FP2.png",
        subtitle: "App Design - June 20, 2022",
        title: "Redesign channel website landing page",
    },
    {
        img: "/images/FP3.png",
        subtitle: "App Design - June 20, 2022",
        title: "Redesign channel website landing page",
    },
    {
        img: "/images/FP4.png",
        subtitle: "App Design - June 20, 2022",
        title: "Redesign channel website landing page",
    },
];

const FeaturedProject = () => {
    return (
        <section className="bg-[#F0FDF4] py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="FEATURED PROJECT"
                    headerTitle="We provide the Perfect Solution to your business growth"
                />

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column (Big Card) */}
                    <div className="rounded-lg  p-6 flex flex-col">
                        <img
                            src={projectData[0].img}
                            alt={projectData[0].title}
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
                            {projectData[0].subtitle}
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
                            {projectData[0].title}
                        </h3>
                    </div>

                    {/* Right Column (4 Cards Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {projectData.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className=" rounded-lg  p-4 flex flex-col"
                            >
                                <img
                                    src={item.img}
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
                                    {item.subtitle}
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
            </div>
        </section>
    );
};

export default FeaturedProject;
