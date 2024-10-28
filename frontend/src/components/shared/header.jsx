import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo-no-background.svg";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = true;

  return (
    <div className="py-4 flex justify-between items-center w-full px-4 md:px-8">
      {/* Logo */}
      <Link to="/" className="ml-0">
        <img src={Logo} alt="Logo" className="h-12 md:h-16" style={{ marginLeft: "-5rem" }}/>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex font-medium items-center gap-5">
        <li>
          <Button variant="link">Home</Button>
        </li>
        <li>
          <Button variant="link">Jobs</Button>
        </li>
        <li>
          <Button variant="link">Browse</Button>
        </li>
        <li>
          <Button variant="link">Our Team</Button>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* User Actions */}
      {user && (
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
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-3/4 bg-gray-900 text-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col items-start gap-3">
            <li>
              <Button variant="link" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                Home
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                Jobs
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                Browse
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                Our Team
              </Button>
            </li>
          </ul>
          {!user ? (
            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Button>
              <Button onClick={() => setIsMobileMenuOpen(false)}>SignUp</Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => setIsMobileMenuOpen(false)}>
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
