import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo-no-background.svg";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = false; 

  return (

    <nav className="flex items-center justify-between bg-gray-900 bg-opacity-80 p-5 shadow-lg fixed w-full h-16 z-50 ">
      <Link to="/" className="flex items-center space-x-2">
        <img src='src/assets/logo.png' alt="Logo" className="h-32 w-32 mt-12" />
       
      </Link>

      <ul className="hidden md:flex space-x-6">
        {["Home", "Jobs", "Browse", "Our Team"].map((item) => (
          <li key={item} className="text-white text-lg hover:text-cyan-400 transition duration-300 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-2 text-center text-white">
              <div className="flex flex-col space-y-2">
                <Link to="/profile">
                  <Button variant="link">Profile</Button>
                </Link>
                <Button variant="outline">Logout</Button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <Menu className="text-white h-6 w-6" />
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-3/4 bg-gray-900 text-white shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          {["Home", "Jobs", "Heroes", "Profile"].map((item) => (
            <Link key={item} to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="link" className="w-full text-left text-white hover:text-cyan-400">{item}</Button>
            </Link>
          ))}
          {!user ? (
            <>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">SignUp</Button>
              </Link>
            </>
          ) : (
            <Button variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Logout
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
