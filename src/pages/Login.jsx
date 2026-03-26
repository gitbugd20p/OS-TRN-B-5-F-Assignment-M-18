import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[Poppins]">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[20px] shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please enter your details to log in
                    </p>
                </div>
                <form
                    className="mt-8 space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="rounded-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[10px] focus:outline-none focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[10px] focus:outline-none focus:ring-[#20B15A] focus:border-[#20B15A] sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-[#20B15A] focus:ring-[#20B15A] border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <button
                            type="button"
                            className="font-medium text-[#20B15A] hover:text-[#1a8f49]"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-[10px] text-white bg-[#20B15A] hover:bg-[#1a8f49] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#20B15A] transition-all"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-[#20B15A] hover:text-[#1a8f49]"
                    >
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
