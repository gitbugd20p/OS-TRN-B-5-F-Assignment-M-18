import { FaRegSadTear } from "react-icons/fa"; // Sad emoji icon
import Subscribe from "../components/Subscribe";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="bg-white pt-28 pb-16 min-h-screen flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center gap-6">
                {/* Icon */}
                <FaRegSadTear size={100} className="text-gray-500" />

                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900">404</h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600">
                    Oops! The page you are looking for does not exist.
                </p>

                {/* Back to Home button */}
                <NavLink
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md font-semibold hover:bg-green-700 transition"
                >
                    Go Back Home
                </NavLink>
            </div>
        </section>
    );
};

export default NotFound;
