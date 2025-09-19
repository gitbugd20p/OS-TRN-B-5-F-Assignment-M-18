import { useEffect, useState } from "react";
import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import TestimonialCard from "../components/TestimonialCard";
import { getAllTestimonials } from "../api/allTestimonials";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await getAllTestimonials();
                if (res && Array.isArray(res)) {
                    setTestimonials(res);
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
        fetchTestimonials();
    }, []);

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
                            description={t.msg}
                            name={t.name}
                            position={t.designation}
                        />
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Testimonial;
