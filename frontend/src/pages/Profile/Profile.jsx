import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Contact, Mail, Pen } from "lucide-react";
import React from "react";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];
const isResume = true;
const Profile = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-[#040108] border border-gray-600 rounded-2xl my-5 p-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/images/heroes/iron.png" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet facere laborum reiciendis veniam dolor?
              </p>
            </div>
          </div>
          <Button variant="outline" className="text-right">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>ironman@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>65654656</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {isResume ? (
              <a
                target="blank"
                href="https://resume.com"
                className="text-blue-700 w-full hocer:underline cursor-pointer"
              >
                Resume.pdf
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-black rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Table */}
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;