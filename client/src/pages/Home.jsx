import AboutUs from "../components/AboutUs";
import BioData from "../components/BioData";
import Descripition from "../components/Descripition";
import Layout from "../Layout/Layout";
const Home = () => {
    return (
             <Layout>
                
                 <div className="w-[460px] p-5 mx-auto md:w-[900px] lg:w-[1024px] xl:w-[1280px]">
                 <div className="min-h-screen flex items-center bg-[#4e4e4c]">
                    <div className="flex-1 max-w-7xl mx-auto">
                        <ul className="grid grid-cols-6 gap-8 grid-rows-6 grid-flow-row-dense">
                            
                        <li className="xl:w-[370px] xl:h-[736px] lg:w-[280px] lg:h-[650px]  md:w-[850px] md:h-[700px] w-[360px] h-[700px] mx-auto bg-[#1D1C22] row-start-1 row-span-3 col-start-1 col-span-6 md:row-start-1 md:row-span-3 md:col-start-1 md:col-span-6 lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">
                            <BioData></BioData>
                            </div></li>
                        <li className="xl:w-[799px] lg:w-[640px] lg:h-[300px]  md:w-[850px]  w-[360px] mx-auto bg-[#1D1C22] row-start-4 row-span-2 col-start-1 col-span-6 md:row-start-4 md:row-span-2 md:col-start-1 md:col-span-6  lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:col-span-4 rounded-lg shadow-xl"><div className="h-24">
                            <Descripition></Descripition>
                            </div></li>
                        <li className="xl:w-[380px] lg:w-[300px]  md:w-[320px] w-[365px] mx-auto bg-[#1D1C22]  col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3  lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">
                         <AboutUs></AboutUs></div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:mr-3 md:w-[490px] w-[365px] h-[265px] mx-auto  bg-[#1D1C22]  col-span-6  md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 lg:row-start-3 lg:row-span-2 rounded-lg shadow-xl"><div className="h-24">projects</div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:w-[260px] w-[365px] mx-auto bg-[#1D1C22]  col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3  lg:col-span-2 rounded-lg shadow-xl "><div className="h-24">services</div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:w-[260px] w-[365px] mx-auto bg-[#1D1C22]  col-span-6 md:col-start-3 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl "><div className="h-24">blog</div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:w-[250px] w-[365px] mx-auto bg-[#1D1C22]  col-span-6 md:col-start-5 md:col-span-2 lg:col-start-5 lg:col-span-2  rounded-lg shadow-xl "><div className="h-24">Experiance</div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:w-[400px] w-[365px] mx-auto bg-[#1D1C22]   col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl "><div className="h-24">contact</div></li>
                        <li className="xl:w-[380px] lg:w-[300px] md:w-[400px] md:mr-1 w-[365px] mx-auto bg-[#1D1C22]  col-span-6 md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">tesitmnials</div></li>
                        </ul>

                    </div>

                   </div>
                 </div>
                   
              
             </Layout>
         
    );
};

export default Home;