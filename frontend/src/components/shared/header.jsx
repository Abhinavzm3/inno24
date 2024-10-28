import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo-no-background.svg";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Header = () => {
  const user = false;
  return (
    <div className="py-4 flex justify-between items-center w-full">
      {/* logo starts */}
      <Link to="/" className="ml-0">
        <img
          src={Logo}
          alt="Logo"
          className="h-16"
          style={{ marginLeft: "-5rem" }}
        />
      </Link>

      {/* here all the navigation pages */}
      <ul className="flex font-medium items-center gap-5">
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

      {!user ? (
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button>SignUp</Button>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
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
    </div>
  );
};

export default Header;
