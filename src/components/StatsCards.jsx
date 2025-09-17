const statsData = [
    {
        icon: "/icons/Group.png",
        number: "240452",
        text: "Followers",
    },
    {
        icon: "/icons/Like.png",
        number: "6300",
        text: "Solved Problems",
    },
    {
        icon: "/icons/Happy.png",
        number: "25000",
        text: "Happy Customers",
    },
    {
        icon: "/icons/Scan.png",
        number: "360452",
        text: "Projects",
    },
];

const StatsCards = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {statsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg flex flex-col items-center p-6 text-center"
                        >
                            {/* Icon */}
                            <img
                                src={item.icon}
                                alt={item.text}
                                className="w-[100px] h-[100px] rounded-[10px] mb-4 p-[30px] bg-[#D7F5DC]"
                            />

                            {/* Number */}
                            <h3
                                className="text-[30px] font-semibold mb-2"
                                style={{
                                    fontFamily: "Poppins",
                                    lineHeight: "1",
                                }}
                            >
                                {item.number}
                            </h3>

                            {/* Text */}
                            <p
                                className="text-[16px] font-medium text-gray-600"
                                style={{
                                    fontFamily: "Poppins",
                                    lineHeight: "1",
                                }}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCards;
