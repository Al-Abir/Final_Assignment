import Layout from "../Layout/Layout";
const Home = () => {
    return (
             <Layout>
                   <div className="min-h-screen flex items-center bg-purple-500">
                    <div className="flex-1 max-w-4xl mx-auto p-10">
                        <ul className="grid grid-cols-6 gap-8 grid-rows-6 grid-flow-row-dense">
                            
                        <li className="bg-white row-start-1 row-span-3 col-start-1 col-span-6 md:row-start-1 md:row-span-3 md:col-start-1 md:col-span-6 lg:row-start-1 lg:row-span-4 lg:col-start-1 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">bio data</div></li>
                        <li className="bg-white row-start-4 row-span-2 col-start-1 col-span-6 md:row-start-4 md:row-span-2 md:col-start-1 md:col-span-6  lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:col-span-4 rounded-lg shadow-xl"><div className="h-24">desripition</div></li>
                        <li className="bg-white col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">about</div></li>
                        <li className="bg-white  col-span-6  md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 lg:row-start-3 lg:row-span-2 rounded-lg shadow-xl"><div className="h-24">projects</div></li>
                        <li className="bg-white  col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3  lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">services</div></li>
                        <li className="bg-white  col-span-6 md:col-start-3 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">blog</div></li>
                        <li className="bg-white  col-span-6 md:col-start-5 md:col-span-2 lg:col-start-5 lg:col-span-2  rounded-lg shadow-xl"><div className="h-24">Experiance</div></li>
                        <li className="bg-white   col-span-6 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">contact</div></li>
                        <li className="bg-white  col-span-6 md:col-start-3 md:col-span-4 lg:col-start-5 lg:col-span-2 rounded-lg shadow-xl"><div className="h-24">tesitmnials</div></li>
                        </ul>

                    </div>

                   </div>
              
             </Layout>
         
    );
};

export default Home;