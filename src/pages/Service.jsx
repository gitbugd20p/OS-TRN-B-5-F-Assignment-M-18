import HSubHOfDiv from "../components/HSubHOfDiv";
import Subscribe from "../components/Subscribe";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";
import { getAllServices } from "../api/allServiceApi";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getAllServices();
                setServices(data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchServices();
    }, []);
    
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
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.des}
                            images={[
                                service.image1,
                                service.image2,
                                service.image3,
                                service.image4,
                            ]}
                        />
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Service;
