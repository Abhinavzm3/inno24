import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import * as Dialog from "@radix-ui/react-dialog";
import { useSelector } from "react-redux";



const Jobs = () => {
  const {allJobs} = useSelector(store => store.job);

  return (
    <div className="max-w-7xl mx-auto mt-5">
      {/* Drawer for smaller screens using Radix UI */}
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="lg:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Filter Jobs
          </button>
        </Dialog.Trigger>
        
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-40" />
          <Dialog.Content className="fixed left-0 top-0 bottom-0 w-64 bg-[#000314] p-5 z-50 transform transition-transform overflow-y-auto max-h-screen">
            <h1 className="text-lg font-bold text-white mb-4">Filter Jobs</h1>
            <FilterCard />
            <Dialog.Close asChild>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full">
                Apply Filters
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="hidden lg:block lg:w-1/5">
          <FilterCard />
        </div>
        
        <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
          {
          allJobs.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {
              allJobs.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
