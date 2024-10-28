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
    <nav className="flex items-center justify-between bg-gray-900 bg-opacity-80 p-5 shadow-lg sticky h-16 z-50 ">
      <Link to="/" className="flex items-center space-x-2">
        <img src="src/assets/logo.png" alt="Logo" className="h-20 w-20" />
        <span className="text-white text-lg font-semibold">
          S.T.A.R.K Connect
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex font-medium items-center gap-5">
        <li>
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <Button variant="link">Jobs</Button>
          </Link>
        </li>
        <li>
          <Link to="/browse">
            <Button variant="link">Browse</Button>
          </Link>
        </li>
        <li>
          <Link to="/our-team">
            <Button variant="link">Our Team</Button>
          </Link>
        </li>
      </ul>

      {/* User Avatar (Visible on all screen sizes) */}
      <div className="flex items-center gap-4">
        {user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer md:ml-4">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 translate-y-1">
              <div className="flex gap-4 space-y-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h4 className="font-medium">IronMan</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-gray-300 my-2">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="outline">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <Link to="/login" className="hidden md:block">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup" className="hidden md:block">
              <Button>SignUp</Button>
            </Link>
          </>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="text-white h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-3/4 bg-gray-900 text-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col items-start gap-3">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" onClick={() => setIsMobileMenuOpen(false)}>
                Browse
              </Link>
            </li>
            <li>
              <Link to="/our-team" onClick={() => setIsMobileMenuOpen(false)}>
                Our Team
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            {!user ? (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button>SignUp</Button>
                </Link>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
