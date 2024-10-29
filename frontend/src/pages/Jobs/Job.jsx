import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-[#070310] border border-[#085765]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-300">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icons">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gp-2 my-2 gap-8">
        <Button variant="outline" className="rounded-full" size="icons">
          <Avatar className="h-20 w-20 rounded-full">
            <AvatarImage src="/images/company_img.webp" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Avengers</h1>
          <p className="text-sm text-gray-400">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
          delectus voluptates nisi, voluptatum sunt quos neque rem libero
          molestias!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#FFD700] font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#FF6347] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#DA70D6] font-bold"} variant="ghost">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#FFD700]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
