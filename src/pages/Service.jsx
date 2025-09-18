import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        title: "Build & Launch Without Problems",
        description:
            "Increase your team's productivity and save time with a bot that answers and fields customer inquiries.",
        images: [
            "/images/Service1.png",
            "/images/Service2.png",
            "/images/Service3.png",
            "/images/Service4.png",
        ],
    },
    {
        title: "Seamless Team Collaboration",
        description:
            "Enhance communication and project management with our easy-to-use tools designed for growth.",
        images: [
            "/images/Service5.png",
            "/images/Service6.png",
            "/images/Service7.png",
            "/images/Service8.png",
        ],
    },
    {
        title: "Build & Launch Without Problems",
        description:
            "Increase your team's productivity and save time with a bot that answers and fields customer inquiries.",
        images: [
            "/images/Service1.png",
            "/images/Service2.png",
            "/images/Service3.png",
            "/images/Service4.png",
        ],
    },
    {
        title: "Seamless Team Collaboration",
        description:
            "Enhance communication and project management with our easy-to-use tools designed for growth.",
        images: [
            "/images/Service5.png",
            "/images/Service6.png",
            "/images/Service7.png",
            "/images/Service8.png",
        ],
    },
];

const Service = () => {
    return (
        <section className="bg-white pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 pb-12">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="OUR SERVICES"
                    headerTitle="We provide the Perfect Solution to your business growth"
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            images={service.images}
                        />
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Service;
