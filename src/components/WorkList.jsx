import { useEffect, useState } from "react";
import HSubHOfDiv from "./HSubHOfDiv";
import { getWorkList } from "./../api/workListApi";

const imageList = [
    "/images/Activity.png",
    "/images/Heart.png",
    "/images/Work.png",
];

const WorkList = () => {
    const [workList, setWorkList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWorkList();
                setWorkList(data); // expecting [{title, description}, ...]
            } catch (error) {
                console.error("Error fetching work list:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="bg-white pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
                <HSubHOfDiv
                    headerTop="WORK LIST"
                    headerTitle="We provide the Perfect Solution to your business growth"
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workList.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col items-start p-6 rounded-lg"
                        >
                            {/* Image */}
                            <img
                                src={imageList[index % imageList.length]}
                                alt={item.title}
                                className="w-[93px] h-[93px] rounded-[20px] mb-6 p-[30px] bg-[#D7F5DC]"
                            />

                            {/* Title */}
                            <h3
                                className="font-semibold text-[24px] mb-4"
                                style={{
                                    fontFamily: "Poppins",
                                    lineHeight: "1",
                                }}
                            >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                {item.description}
                            </p>

                            {/* Learn More Button */}
                            <div className="w-full flex justify-center">
                                <button className="bg-white border border-none rounded-[10px] px-5 py-3 font-medium hover:bg-gray-50 transition">
                                    Learn More &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkList;
