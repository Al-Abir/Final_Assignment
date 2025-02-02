import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
           <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald">

           <Header />
           
           <main className="min-h-[80vh]">
              {children}
           </main>
      
          <Footer />
     

           </div>
              
        </>
    );
};

export default Layout;
