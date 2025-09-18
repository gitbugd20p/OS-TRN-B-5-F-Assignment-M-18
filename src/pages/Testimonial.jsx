import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
    {
        image: "/images/Testimonial1.png",
        description:
            "This agency helped us boost our online presence and gain more customers. Their solutions really work!",
        name: "Devon Lane",
        position: "CEO, TechCorp",
    },
    {
        image: "/images/Testimonial2.png",
        description:
            "Amazing experience! The team was professional and supportive throughout our project.",
        name: "Danny Bailey",
        position: "Marketing Manager",
    },
    {
        image: "/images/Testimonial3.png",
        description:
            "Highly recommend this agency. They understand client needs and deliver exceptional results.",
        name: "Alex Lov",
        position: "Founder, StartupHub",
    },
    {
        image: "/images/Testimonial4.png",
        description:
            "This agency helped us boost our online presence and gain more customers. Their solutions really work!",
        name: "Devon Lane",
        position: "CEO, TechCorp",
    },
    {
        image: "/images/Testimonial5.png",
        description:
            "Amazing experience! The team was professional and supportive throughout our project.",
        name: "Danny Bailey",
        position: "Marketing Manager",
    },
    {
        image: "/images/Testimonial6.png",
        description:
            "Highly recommend this agency. They understand client needs and deliver exceptional results.",
        name: "Alex Lov",
        position: "Founder, StartupHub",
    },
];

const Testimonial = () => {
    return (
        <section className="bg-white pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 pb-12">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="TESTIMONIAL LIST"
                    headerTitle="Better Agency/SEO Solution At Your Fingertips"
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            image={t.image}
                            description={t.description}
                            name={t.name}
                            position={t.position}
                        />
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Testimonial;
