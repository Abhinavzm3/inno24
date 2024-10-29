import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-20%">
          {/* Filter page */}
          <FilterCard />
        </div>
        {/* job card */}
        {jobsArray.length <= 0 ? (
          <span>Job Not Found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
            {
              jobsArray.map((items, index) => (
                <div>
                  <Job />
                </div>
              ))
            }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
