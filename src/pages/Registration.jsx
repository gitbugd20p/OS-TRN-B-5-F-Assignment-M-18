import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[Poppins]">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[20px] shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-900">
                        Create Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Join our digital agency community today
                    </p>
                </div>
                <form
                    className="mt-8 space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                required
                                className="block w-full px-3 py-3 border border-gray-300 rounded-[10px] focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                required
                                className="block w-full px-3 py-3 border border-gray-300 rounded-[10px] focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            className="block w-full px-3 py-3 border border-gray-300 rounded-[10px] focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="block w-full px-3 py-3 border border-gray-300 rounded-[10px] focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                            placeholder="Create a strong password"
                        />
                    </div>

                    <div className="text-xs text-gray-500">
                        By registering, you agree to our{" "}
                        <span className="text-[#20B15A] cursor-pointer">
                            Terms
                        </span>{" "}
                        and{" "}
                        <span className="text-[#20B15A] cursor-pointer">
                            Privacy Policy
                        </span>
                        .
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-[10px] text-white bg-[#20B15A] hover:bg-[#1a8f49] transition-all"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-[#20B15A] hover:text-[#1a8f49]"
                    >
                        Log in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
