import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Hemant",
    college: "National Institute of Technology Allahabad",
    bio: "Ensures the safety of the team and the project.",
    image: "https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "https://www.linkedin.com/in/peter-quill/",
    github: "https://github.com/peter-quill",
    email: "peterquill@gmail.com",
  },
  {
    name: "Abhinav",
    college: "National Institute of Technology Allahabad",

    bio: "Tech expert and master of custom gadgets.",
    image: "https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "https://www.linkedin.com/in/peter-quill/",
    github: "https://github.com/peter-quill",
    email: "peterquill@gmail.com",
  
  },
  {
    name: "Arpita",
    college: "National Institute of Technology Allahabad",

    bio: "Strong support in challenging times.",
    image: "https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "https://www.linkedin.com/in/peter-quill/",
    github: "https://github.com/peter-quill",
    email: "peterquill@gmail.com",
  },
  {
    name: "Akash",
    college: "National Institute of Technology Allahabad",

    bio: "Analyzes data with a unique perspective.",
    image: "https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "https://www.linkedin.com/in/peter-quill/",
    github: "https://github.com/peter-quill",
    email: "peterquill@gmail.com",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-cover bg-centre bg-fixed relative text-blue-500 flex flex-col items-center py-10 bg-blend-normal" style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMGJjZTk1NTYtM2I4Yi00NjJhLTg5OWEtZDlkZjMzZjMyY2VkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg')" }}>
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-md"></div>
        {/* Content Wrapper */}
        <div className="relative z-10 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: "#22d3ee" }}>Meet Our Team</h1>
        <h3 className="text-1xl font-bold mb-8 text-center italic" style={{ color: "#22d3ee" }}>"Driven by passion, united by purpose."</h3>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 border border-gray-700"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 border-4"
                style={{ borderColor: "#22d3ee" }}
              />
              <h2 className="text-xl font-semibold" style={{ color: "#22d3ee" }}>{member.name}</h2>
              <p className="text-gray-100 text-sm mb-2">{member.college}</p>
              <p className="text-gray-300">{member.bio}</p>

              <div className="flex space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-cyan-400 hover:text-[#bacfd2]" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-cyan-400 hover:text-[#b8c1c2]" />
                </a>
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="text-2xl text-cyan-400 hover:text-[#a7b3b5]" />
                </a>
              </div>
            </div>

            
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;