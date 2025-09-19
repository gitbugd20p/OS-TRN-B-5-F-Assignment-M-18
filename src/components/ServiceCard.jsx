const ServiceCard = ({ title, description, images }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition duration-300">
            {/* Text Section */}
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-900">
                    {title.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description.toUpperCase()}
                </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full max-w-[550px] h-[500px] mx-auto">
                {/* First Image */}
                <div className="col-span-3 row-span-1 rounded-xl overflow-hidden">
                    <img
                        src={images[0]}
                        alt="service-img-1"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Second Image */}
                <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                    <img
                        src={images[1]}
                        alt="service-img-2"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Third Image */}
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                    <img
                        src={images[2]}
                        alt="service-img-3"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Fourth Image */}
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                    <img
                        src={images[3]}
                        alt="service-img-4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
