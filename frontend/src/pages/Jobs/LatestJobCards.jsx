import { Badge } from '@/components/ui/badge';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/description/${job._id}`)}
            className="p-5 rounded-md shadow-xl bg-gray-800 border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
        >
            <div>
                <h1 className="font-medium text-lg text-white">{job?.company?.name}</h1>
                <p className="text-sm text-gray-400">India</p>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2 text-white">{job?.title}</h1>
                <p className="text-sm text-gray-300">{job?.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className="text-blue-300 font-bold bg-gray-900 border border-blue-300" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-red-400 font-bold bg-gray-900 border border-red-400" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-purple-400 font-bold bg-gray-900 border border-purple-400" variant="ghost">
                    {job?.salary} LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
