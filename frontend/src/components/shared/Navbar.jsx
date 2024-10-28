import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'><span className='text-[#F83682]' >S.T.A.R.K</span></h1>
                </div>
                <div>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                        {/* <li><Link>Home</Link></li>
                <li><Link>Jobs</Link></li>
                <li><Link>Browse</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar