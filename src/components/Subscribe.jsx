import HSubHOfDiv from "./HSubHOfDiv";

const Subscribe = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
                {/* Header */}
                <HSubHOfDiv
                    headerTop="SUBSCRIBE"
                    headerTitle="Subscribe to get the latest news about us"
                />

                {/* Paragraph */}
                <p
                    className="text-gray-600 max-w-2xl"
                    style={{
                        fontFamily: "Avenir",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "100%",
                        textAlign: "center",
                        textTransform: "capitalize",
                        marginBottom: "24px",
                    }}
                >
                    Please drop your email below to get daily update about what
                    we do
                </p>

                {/* Input + Button */}
                <div className="flex items-center w-full max-w-xl border rounded-[14px] overflow-hidden p-1">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="flex-1 px-4 py-3 text-gray-700 focus:outline-none border-none"
                        style={{ fontFamily: "Avenir" }}
                    />
                    <button
                        className="text-white font-medium"
                        style={{
                            backgroundColor: "#F55F1D",
                            width: "130.649px",
                            height: "52.703px",
                            borderRadius: "14px",
                            padding: "8.11px 24.32px",
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
