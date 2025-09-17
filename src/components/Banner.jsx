const Banner = () => {
    return (
        <section className="bg-[#d7f5dc] pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text */}
                <div>
                    <h1 className="text-4xl md:pe-24 md:text-5xl font-bold leading-tight text-gray-900">
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <p className="mt-6 text-lg md:pe-32 text-gray-600">
                        We help businesses like yours earn more customers, stand
                        out from competitors, and make more money.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md font-semibold hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* Right Side - Grid Images */}
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    {/* 1st Image - takes 2 col & 2 row */}
                    <img
                        src="/images/banner-1.png"
                        alt="banner-1"
                        className="col-span-2 row-span-2 w-full h-full object-contain rounded-lg shadow"
                    />

                    {/* 2nd Image - 1 col & 2 row */}
                    <img
                        src="/images/banner-2.png"
                        alt="banner-2"
                        className="col-span-1 row-span-2 w-full h-full object-contain rounded-lg shadow"
                    />

                    {/* 3rd Image - 1 col & 1 row */}
                    <img
                        src="/images/banner-3.png"
                        alt="banner-3"
                        className="col-span-1 row-span-1 w-full h-full object-contain rounded-lg shadow"
                    />

                    {/* 4th Image - 2 col & 1 row */}
                    <img
                        src="/images/banner-4.png"
                        alt="banner-4"
                        className="col-span-2 row-span-1 w-full h-full object-contain rounded-lg shadow"
                    />
                </div>
            </div>
            <div className="mx-auto p-12 mt-12 flex gap-10 items-center justify-around bg-white">
                <div>
                    <img src="./images/logos_google.png" alt="google img" />
                </div>
                <div>
                    <img
                        src="./images/Trello-logo-blue 1.png"
                        alt="google img"
                    />
                </div>
                <div>
                    <img src="./images/logos_monday.png" alt="google img" />
                </div>
                <div>
                    <img src="./images/Notion.png" alt="google img" />
                </div>
                <div>
                    <img src="./images/Slack.png" alt="google img" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
