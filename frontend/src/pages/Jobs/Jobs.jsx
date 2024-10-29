import React from 'react'
import FilterCard from './FilterCard'
import Job from './Job';

const jobsArray = [1,2,3,4,5,6,7,8];

const Jobs = () => {
  return (
    <div className='max-w-7xl mx-auto mt-5'>
        {/* Filter page */}
        <FilterCard />
        {/* job card */}
        {
          jobsArray.map((item,index) => <Job /> )
        }
    </div>
  )
}

export default Jobs