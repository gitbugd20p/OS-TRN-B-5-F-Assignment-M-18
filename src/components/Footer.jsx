import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Column 1 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        WEB LOGO
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Some footer text about the Agency. Just a little
                        description to help people understand you better.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#20b15a] hover:bg-green-700 transition"
                        >
                            <FaFacebookF className="text-white" size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#20b15a] hover:bg-green-700 transition"
                        >
                            <FaTwitter className="text-white" size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#20b15a] hover:bg-green-700 transition"
                        >
                            <FaLinkedinIn className="text-white" size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#20b15a] hover:bg-green-700 transition"
                        >
                            <FaInstagram className="text-white" size={18} />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Address
                    </h3>
                    <p className="text-gray-400">Design Agency Head Office.</p>
                    <p className="text-gray-400">Airport Road</p>
                    <p className="text-gray-400">United Arab Emirate</p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                © Copyright Design Agency 2022
            </div>
        </footer>
    );
};

export default Footer;
