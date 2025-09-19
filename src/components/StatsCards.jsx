import { useEffect, useState } from "react";
import { getStatList } from "../api/statList";

const statsData = [
    {
        icon: "/icons/Group.png",
        key: "followers",
        text: "Followers",
    },
    {
        icon: "/icons/Like.png",
        key: "solved",
        text: "Solved Problems",
    },
    {
        icon: "/icons/Happy.png",
        key: "customers",
        text: "Happy Customers",
    },
    {
        icon: "/icons/Scan.png",
        key: "projects",
        text: "Projects",
    },
];

const StatsCards = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await getStatList(); // should return your JSON object
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
        fetchStats();
    }, []);

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

                            {/* Number (from API or fallback) */}
                            <h3
                                className="text-[30px] font-semibold mb-2"
                                style={{
                                    fontFamily: "Poppins",
                                    lineHeight: "1",
                                }}
                            >
                                {stats ? stats[item.key] : "--"}
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
