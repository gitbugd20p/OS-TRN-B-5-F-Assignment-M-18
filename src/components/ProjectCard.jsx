const ProjectCard = ({ title, image }) => {
    return (
        <div className="flex flex-col rounded-[20px] shadow bg-white overflow-hidden p-6">
            {/* Image */}
            <div className="w-full h-[450px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-fit"
                />
            </div>

            {/* Title */}
            <h3 className="text-[26px] font-semibold font-poppins uppercase text-gray-900 text-center py-6">
                {title}
            </h3>
        </div>
    );
};

export default ProjectCard;
