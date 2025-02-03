import Layout from "../Layout/Layout";
import BioData from "../components/BioData";

const About = () => {
    return (
        <Layout>
            {/* Hero Section Container */}
            <div className="container mx-auto flex flex-col lg:flex-col md:flex-col xl:flex-row gap-8">
                {/* Left Section - BioData (1/4 on xl, full width on others) */}
                <div className="w-full xl:w-1/4 border border-gray-300 p-4">
                    <ul className="grid grid-cols-6 gap-8 grid-rows-6 grid-flow-row-dense">
                        <li className="xl:w-[370px] xl:h-[736px] lg:w-[280px] lg:h-[650px]  
                            md:w-[850px] md:h-[700px] w-[360px] h-[700px] mx-auto bg-[#1D1C22] 
                            row-start-1 row-span-3 col-start-1 col-span-6 
                            md:row-start-1 md:row-span-3 md:col-start-1 md:col-span-6 
                            lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-2 
                            rounded-lg shadow-xl">
                            <div className="h-24">
                                <BioData />
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Section - Text (3/4 on xl, full width on others) */}
                <div className="w-full xl:w-3/4 border border-indigo-600 p-10">
                    <h2 className="text-xl font-semibold">hekkko</h2>
                </div>
            </div>
        </Layout>
    );
};

export default About;