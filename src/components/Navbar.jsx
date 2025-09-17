import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/team", label: "Team" },
        { path: "/service", label: "Service" },
        { path: "/projects", label: "Projects" },
        { path: "/testimonials", label: "Testimonials" },
        { path: "/login", label: "Login" },
        { path: "/register", label: "Register" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    Design<span className="text-gray-800">AGENCY</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `hover:text-blue-600 transition ${
                                        isActive
                                            ? "text-blue-600 font-semibold"
                                            : "text-gray-700"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)} // close menu on click
                                className={({ isActive }) =>
                                    `block hover:text-blue-600 transition ${
                                        isActive
                                            ? "text-blue-600 font-semibold"
                                            : "text-gray-700"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
