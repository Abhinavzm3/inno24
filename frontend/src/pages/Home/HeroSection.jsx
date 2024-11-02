import { useState, useEffect } from "react";

const avengerImages = [
  "/images/_947f2c86-07ef-411d-a1d0-14f647879ced.jpg",
  "/images/_5424fdd7-5637-4f14-921f-aef375c71fa8.jpg",
  "/images/_2283954d-b914-4e7c-8d3e-0aa67e714a91.jpg",
  "/images/_39a8c2e8-934d-4961-83b8-64ec863acffd.jpg",
  "/images/_df4ed7ae-2182-49ad-902f-f04dddd1f9b0.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % avengerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
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
        Discover your role in safeguarding the world. Apply for tech, strategy, and hero-level positions, and make your mark in the Avengers universe.
      </p>
    </section>
  );
};

export default HeroSection;
