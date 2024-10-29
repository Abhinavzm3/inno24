import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
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
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg px-4 py-2 ${
            isApplied
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-[#37256f] hover:bg-[#4c37a0] text-white"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-500 font-medium my-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-slate-300">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-slate-300">Hyderabad</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-slate-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            deleniti distinctio pariatur veniam consequatur quaerat nihil nam
            iusto eligendi corporis.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-slate-300">2yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-slate-300">12LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-slate-300">4</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-slate-300">17-7-2024</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
