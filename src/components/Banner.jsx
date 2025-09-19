import { useEffect, useState } from "react";
import { getBannerBrands } from "../api/bannerBrandsApi";
import { HeroListApi } from "../api/HeroListApi";

const Banner = () => {
    const [brands, setBrands] = useState([]);
    const [hero, setHero] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await getBannerBrands();
                setBrands(brandsData);

                const heroData = await HeroListApi();
                setHero(heroData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="bg-[#d7f5dc] pt-14 pb-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text */}
                <div>
                    <h1 className="text-4xl md:pe-24 md:text-5xl font-bold leading-tight text-gray-900">
                        {hero?.title || "Loading..."}
                    </h1>
                    <p className="mt-6 text-lg md:pe-32 text-gray-600">
                        {hero?.description ||
                            "We help businesses like yours earn more customers, stand out from competitors, and make more money."}
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md font-semibold hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* Right Side - Grid Images */}
                {hero && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow h-40 md:h-80">
                            <img
                                src={hero.image1}
                                alt="banner-1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-2 rounded-lg shadow overflow-hidden h-40 md:h-80">
                            <img
                                src={hero.image2}
                                alt="banner-2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg shadow overflow-hidden h-32 md:h-40">
                            <img
                                src={hero.image3}
                                alt="banner-3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 row-span-1 rounded-lg shadow overflow-hidden h-32 md:h-40">
                            <img
                                src={hero.image4}
                                alt="banner-4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Brand-List */}
            <div className="mx-auto p-12 mt-12 flex gap-10 items-center justify-around bg-white flex-wrap">
                {brands.length > 0 ? (
                    brands.map((brand) => (
                        <div key={brand.id}>
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-12 object-contain"
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading brands...</p>
                )}
            </div>
        </section>
    );
};

export default Banner;
