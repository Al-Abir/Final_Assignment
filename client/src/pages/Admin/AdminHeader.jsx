import { useState } from "react";


const AdminHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuth = () => {
      setIsLoggedIn(!isLoggedIn);
    };
    return (
        <div className="">
            
            <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-xl font-bold">Abir Sheikh</h1>


        {/* Login / Logout Button */}
        <button
          onClick={toggleAuth}
          className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition mr-6"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
        </div>
    );
};

export default AdminHeader;