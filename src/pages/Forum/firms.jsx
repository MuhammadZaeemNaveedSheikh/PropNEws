import { Link } from "react-router-dom";

const Firms = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-6">
            {/* Firms cards */}
            <div className="lg:w-3/4 flex flex-col lg:flex-row lg:flex-wrap items-center gap-4">
                <div className="w-full lg:w-full flex items-center border border-black bg-transparent rounded-lg overflow-hidden relative">
                    {/* Company Logo */}
                    <img
                        src="src/assets/images/logo.jpg"
                        alt="Logo"
                        className="w-20 h-20 object-cover mx-4 rounded-lg"
                    />
                    <div className="flex flex-col justify-between flex-grow p-4">
                        {/* Company Name */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-800">FTMO</h2>
                            <p className="text-gray-600 mt-2 text-xs text-gray-200">
                                A Fresher Way to explore Crypto
                            </p>
                            <p className="text-primary ml-2 mt-4 text-xs text-gray-200">
                                14 {"  "}CFD
                            </p>
                            
                        </div>
                        {/* Top-right and bottom-right buttons */}
                        <div className="flex flex-col space-y-4 items-end absolute top-3 right-4">
                            <button className="w-11 h-9 bg-transparent text-white border border-black font-poppins shadow-sm font-light rounded-lg flex items-center font-kanit justify-center">
                                13<span className="text-primary text-xs">{" "} v</span>
                            </button>
                            <button className="w-11 h-9 bg-transparent text-white border border-black font poppins font-light shadow-sm rounded-lg flex items-center font-kanit justify-center">
                                81<span className="text-primary gap-x-1">{" "} ^</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="w-full lg:w-full flex items-center border border-black bg-transparent rounded-lg overflow-hidden relative">
                    {/* Company Logo */}
                    <img
                        src="src/assets/images/logo.jpg"
                        alt="Logo"
                        className="w-20 h-20 object-cover mx-4 rounded-lg"
                    />
                    <div className="flex flex-col justify-between flex-grow p-4">
                        {/* Company Name */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-800">FTMO</h2>
                            <p className="text-gray-600 mt-2 text-xs text-gray-200">
                                A Fresher Way to explore Crypto
                            </p>
                            <p className="text-primary ml-2 mt-4 text-xs text-gray-200">
                                14 CFD
                            </p>
                            
                        </div>
                        {/* Top-right and bottom-right buttons */}
                        <div className="flex flex-col space-y-4 items-end absolute top-3 right-4">
                            <button className="w-11 h-9 bg-transparent text-white border border-black font-poppins shadow-sm font-light rounded-lg flex items-center font-kanit justify-center">
                                13<span className="text-primary text-xs">{" "} v</span>
                            </button>
                            <button className="w-11 h-9 bg-transparent text-white border border-black font poppins font-light shadow-sm rounded-lg flex items-center font-kanit justify-center">
                                81<span className="text-primary gap-x-1">{" "} ^</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Add more firm cards with similar structure */}
            </div>
            {/* Trending discussion card */}
            <div className="lg:w-1/4 mx-2 flex bg-transparent rounded-lg justify-start">
                <div className="p-4 flex flex-col justify-start h-full">
                    <h2 className="text-lg font-semibold text-gray-800 font-kanit">Trending Discussions</h2>
                    <p className="text-gray-600 mt-2 h-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Firms;
