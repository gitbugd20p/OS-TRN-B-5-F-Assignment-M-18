import { useEffect, useState } from "react";
import HSubHOfDiv from "../components/HSubHOfDiv";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Subscribe from "../components/Subscribe";
import { getAllTeam } from "../api/allTeamApi";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await getAllTeam();
                if (res && Array.isArray(res)) {
                    setTeamMembers(res);
                }
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        };
        fetchTeam();
    }, []);

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
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover"
                                />

                                {/* Floating Social Icons */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-4">
                                    {member.facebook && (
                                        <a
                                            href={member.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaFacebookF className="text-gray-600 hover:text-blue-600" />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaTwitter className="text-gray-600 hover:text-sky-500" />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaInstagram className="text-gray-600 hover:text-pink-500" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Name & Bio */}
                            <div className="pt-10 pb-6 px-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {member.name}
                                </h3>
                                {member.bio && (
                                    <p className="text-sm text-gray-600 mt-2">
                                        {member.bio}
                                    </p>
                                )}
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
