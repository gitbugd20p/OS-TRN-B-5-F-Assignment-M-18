const TestimonialCard = ({ image, description, name, position }) => {
    return (
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-[20px] p-8">
            {/* Image */}
            <div className="w-[100px] h-[100px] rounded-[20px] overflow-hidden mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Description */}
            <p className="text-[16px] font-poppins font-normal leading-[26px] text-gray-600 mb-6 capitalize">
                {description}
            </p>

            {/* Name */}
            <h3 className="text-[26px] font-poppins font-semibold uppercase text-gray-900">
                {name}
            </h3>

            {/* Position */}
            <p className="text-[16px] font-poppins font-normal text-gray-500 capitalize mt-2">
                {position}
            </p>
        </div>
    );
};

export default TestimonialCard;
