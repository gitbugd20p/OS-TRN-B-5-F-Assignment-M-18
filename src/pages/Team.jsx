import HSubHOfDiv from "../components/HSubHOfDiv";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Subscribe from "../components/Subscribe";

const teamMembers = [
    {
        img: "/images/david.png",
        name: "Devon Lane",
    },
    {
        img: "/images/danny.png",
        name: "Danny Bailey",
    },
    {
        img: "/images/alex.png",
        name: "Alex Lov",
    },
];

const Team = () => {
    return (
        <section className="bg-white pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 pb-12">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="OUR TEAM"
                    headerTitle="We provide the Perfect Solution to your business growth"
                />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
                        >
                            <div className="relative">
                                {/* Profile Image */}
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-80 object-contain"
                                />

                                {/* Floating Social Icons */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-4">
                                    <a href="#">
                                        <FaFacebookF className="text-gray-600 hover:text-blue-600" />
                                    </a>
                                    <a href="#">
                                        <FaTwitter className="text-gray-600 hover:text-sky-500" />
                                    </a>
                                    <a href="#">
                                        <FaInstagram className="text-gray-600 hover:text-pink-500" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
                                    </a>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="pt-10 pb-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {member.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Subscribe />
        </section>
    );
};

export default Team;
