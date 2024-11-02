import { Button } from "@/components/ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="flex justify-center mt-10 relative z-10">
      <div className="flex items-center space-x-4 bg-gray-800 rounded-full px-6 py-2 shadow-lg">
        <input
          type="text"
          placeholder="Find your dream jobs"
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent border-none outline-none placeholder-gray-400 text-white w-64 animate-bounce"
        />
        <Button
          onClick={searchJobHandler}
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-bold transition duration-300"
        >
          <Search className="h-5 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
