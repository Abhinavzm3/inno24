import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import CategoryCarousel from "./CategoryCarousel";
import TestimonialCarousel from "./TestimonialCarousel";
import useGetAllJobs from "../hooks/useGetAllJobs";
import LatestJobs from "../Jobs/LatestJobs";


const avengerImages = [
  "/images/_947f2c86-07ef-411d-a1d0-14f647879ced.jpg",
  "/images/_5424fdd7-5637-4f14-921f-aef375c71fa8.jpg",
  "/images/_2283954d-b914-4e7c-8d3e-0aa67e714a91.jpg",
  "/images/_39a8c2e8-934d-4961-83b8-64ec863acffd.jpg",
  "/images/_df4ed7ae-2182-49ad-902f-f04dddd1f9b0.jpg",
];

const Home = () => {

  useGetAllJobs();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % avengerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-24 text-center space-y-6">
          <div className="absolute inset-0 opacity-20">
            <img
              src={avengerImages[currentImage]}
              alt="Avenger Background"
              className="w-full object-cover"
              style={{ filter: "blur(6px)" }}
            />
          </div>

          <h1 className="relative text-5xl md:text-7xl font-extrabold text-cyan-400 tracking-wide animate-pulse">
            Join the Avengers Initiative
          </h1>
          <p className="relative mt-4 text-lg md:text-2xl text-gray-400">
            "Your Skills, Our Strength. Together, We Protect the World."
          </p>
          <p className="relative text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Discover your role in safeguarding the world. Apply for tech,
            strategy, and hero-level positions, and make your mark in the
            Avengers universe.
          </p>
          {/* </section> */}

          {/* Search Bar */}
          <div className="flex justify-center mt-10 relative z-10">
            <div className="flex items-center space-x-4 bg-gray-800 rounded-full px-6 py-2 shadow-lg">
              <input
                type="text"
                placeholder="Enter Job Title or Skills"
                className="bg-transparent border-none outline-none placeholder-gray-400 text-white w-64 animate-bounce"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-bold transition duration-300">
                <Search className="h-5 w-6" />
              </Button>
            </div>
          </div>

          <CategoryCarousel />
          <LatestJobs />

          {/* Department Section */}
          {/* <section className="py-20 bg-gray-900 custom-cursor"> */}
          <h2 className="text-4xl text-center text-cyan-400 font-bold tracking-wide mb-10">
            Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Department Cards */}
            {[
              {
                title: "Tech & Development",
                description:
                  "Work on advanced S.H.I.E.L.D. tech and support the Avengers' mission with cutting-edge technology.",
                imgSrc: "/images/_03821003-e0d2-42f7-8153-d5d2ae09df9c.jpg",
              },
              {
                title: "Strategy & Intelligence",
                description:
                  "Join the intelligence team to provide strategic insights and tactical support for field operations.",
                imgSrc: "/images/_0dcddbd1-f1f7-44c8-b284-5e884b26098a.jpg",
              },
              {
                title: "Field Operations",
                description:
                  "Step into the action alongside Earth's mightiest heroes. Are you ready to protect the world?",
                imgSrc: "/images/_95ed26d9-e173-4ca6-b245-ac7b0ba97294.jpg",
              },
            ].map((department, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              >
                <img
                  src={department.imgSrc}
                  alt={department.title}
                  className="h-60 w-full object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold mt-4 text-cyan-400">
                  {department.title}
                </h3>
                <p className="text-gray-300 mt-2">{department.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800 text-white">
          <h2 className="text-4xl text-center text-cyan-400 font-bold tracking-wide mb-10">
            Hero Testimonials
          </h2>


         <TestimonialCarousel />
          {/* </section> */}

          {/* <section className="py-20 bg-gray-900 text-white"> */}
          <h2 className="text-4xl text-center text-cyan-400 font-bold tracking-wide mt-20 mb-10">
            Join Us
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-4">
            Discover the journey to becoming a part of the Avengers Initiative.
          </p>
          <ol className="list-decimal list-inside max-w-2xl mx-auto text-gray-400 space-y-2">
            <li>Step 1: Submit Your Application</li>
            <li>Step 2: Initial Screening</li>
            <li>Step 3: Interview Process</li>
            <li>Step 4: Onboarding & Training</li>
          </ol>
        </section>

        {/* Applicatio */}
        <section className="py-20 bg-black">
          <h2 className="text-4xl text-center text-cyan-400 font-bold tracking-wide mb-10">
            Apply Now
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Ready to join the fight? Sign up or log in to apply for exclusive
            positions with the Avengers. Make a difference and become a part of
            something bigger.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold transition duration-300">
              Sign Up
            </Button>
            <Button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold transition duration-300">
              Log In
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-6  bg-gray-900 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Avengers Initiative. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
