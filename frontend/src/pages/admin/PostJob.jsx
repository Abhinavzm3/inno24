import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_API_END_POINT } from "@/lib/utils/constant";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const companyArray = [];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-950">
      <form
        onSubmit={submitHandler}
        className="p-10 max-w-4xl w-full border border-gray-700 shadow-xl rounded-xl mt-10"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Post a New Job
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-white">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="title"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.title}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Description <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="description"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.description}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Requirements <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="requirements"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.requirements}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Salary <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="salary"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.salary}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Location <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="location"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.location}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Job Type <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="jobType"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.jobType}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Experience Level(in yrs) <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="experience"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.experience}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="text-white">
              Number of Positions <span className="text-red-500">*</span>
            </Label>
            <Input
              type="number"
              name="position"
              className="w-full mt-1 px-4 py-3 rounded-full focus:ring-2 focus:outline-none"
              value={input.position}
              onChange={changeEventHandler}
            />
          </div>
          {companies.length > 0 && (
            <Select onValueChange={selectChangeHandler}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {companies.map((company) => {
                    return (
                      <SelectItem
                        key={company._id}
                        value={company?.name?.toLowerCase()}
                      >
                        {company.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
        {loading ? (
          <Button className="w-full my-4">
            {" "}
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4">
            Post New Job
          </Button>
        )}
        {companies.length === 0 && (
          <p className="text-xs text-red-600 font-bold text-center my-3">
            *Please register a company first, before posting a jobs
          </p>
        )}
      </form>
    </div>
  );
};

export default PostJob;
