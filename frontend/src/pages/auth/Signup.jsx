import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form action="" className="w-1/2 border border-">
        <h1 className="font-bold text-xl mb-5">SignUp</h1>
        <div className="my-2"> 
          <Label>Full Name</Label>
          <Input type="text" placeholder="Spooder-Man" />
        </div>
      </form>
    </div>
  );
};

export default Signup;