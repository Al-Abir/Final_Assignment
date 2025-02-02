import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";


const Header = () => {
    const[isMenuOpen, setisMenuOpen] = useState(false);
    return (
        <div className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
           <a href="#">
           <image  className="w-52 hover:scale-105 transition-all">Abir Sheikh</image>
            </a> 
            <ul className="hidden md:flex items-center gap-12 font-semibold">
                <NavLink to ='/'className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">Home</NavLink>
                <NavLink to='/about' className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">About</NavLink>
                <NavLink to='/projects'className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">Projects</NavLink>
                <NavLink to='/blog'className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">Blog</NavLink>
                <NavLink to='/services'className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">Services</NavLink>
            </ul>

            <div>
                <NavLink to='/contact'className="hidden md:flex items-center font-semibold p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all coursor-pointer">contact</NavLink>
            </div>
            <i className="md:hidden block text-3xl cursor-pointer" onClick={()=> setisMenuOpen(!isMenuOpen)}>
            <RiMenu3Fill />
            </i>
            <div className={`absolute md:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100": "opacity-0"}`}
            style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                <NavLink to='/' className=" w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</NavLink>
                <NavLink to='/about'className=" w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">About</NavLink>
                <NavLink to='/projects'className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Projects</NavLink>
                <NavLink to='/blog'className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Blog</NavLink>
                <NavLink to='/services'className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Services</NavLink>
                <NavLink to='/contact' className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</NavLink>

            </div>
        </div>
    );
};

export default Header;