import BioData from "../components/BioData";
import Layout from "../Layout/Layout";
const Home = () => {
    return (
             <Layout>
                   <div className="min-h-screen flex items-center bg-[#4e4e4c]">
                    <div className="flex-1 max-w-7xl mx-auto">
                        <ul className="grid grid-cols-6 gap-8 grid-rows-6 grid-flow-row-dense">
                            
                        <li className="bg-[#1D1C22] row-start-1 row-span-3 col-start-1 col-span-6 md:row-start-1 md:row-span-3 md:col-start-1 md:col-span-6 lg:row-start-1 lg:row-span-4 lg:col-start-1 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">
                            <BioData></BioData>
                            </div></li>
                        <li className="bg-[#1D1C22] row-start-4 row-span-2 col-start-1 col-span-6 md:row-start-4 md:row-span-2 md:col-start-1 md:col-span-6  lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:col-span-4 rounded-lg shadow-xl"><div className="h-24">desripition</div></li>
                        <li className="bg-[#1D1C22] col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">about</div></li>
                        <li className="bg-[#1D1C22]  col-span-6  md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 lg:row-start-3 lg:row-span-2 rounded-lg shadow-xl"><div className="h-24">projects</div></li>
                        <li className="bg-[#1D1C22]  col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3  lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">services</div></li>
                        <li className="bg-[#1D1C22]  col-span-6 md:col-start-3 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">blog</div></li>
                        <li className="bg-[#1D1C22]  col-span-6 md:col-start-5 md:col-span-2 lg:col-start-5 lg:col-span-2  rounded-lg shadow-xl"><div className="h-24">Experiance</div></li>
                        <li className="bg-[#1D1C22]   col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">contact</div></li>
                        <li className="bg-[#1D1C22]  col-span-6 md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">tesitmnials</div></li>
                        </ul>

                    </div>

                   </div>
              
             </Layout>
         
    );
};

export default Home;