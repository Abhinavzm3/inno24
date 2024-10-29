import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
// Adjust the import based on your project structure


const testimonials = [
  {
    quote: "Joining the Avengers has been the greatest honor of my life.",
    author: "Captain America",
    image: "/images/heroes/captain.png",
  },
  {
    quote: "With great power comes great responsibility.",
    author: "Spider-Man",
    image: "/images/heroes/spider.png",
  },
  {
    quote: "Science saved the day yet again!",
    author: "Iron Man",
    image: "/images/heroes/iron.png",
  },
  {
    quote: "We are stronger together.",
    author: "Thor",
    image: "/images/heroes/thor.png",
  },
  {
    quote: "Teamwork is the key to success.",
    author: "Black Widow",
    image: "/images/heroes/black-widow.png",
  },
  {
    quote: "We fight as one.",
    author: "Hawkeye",
    image: "/images/heroes/hawkeye.png",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Set up the automatic carousel effect with 2-second delay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center h-96 overflow-hidden">
      {/* Left Arrow */}
      <Button 
        variant="ghost" 
        className="absolute top-1/2 left-4 -translate-y-1/2 p-1"
        onClick={handlePrev}
      >
        <ChevronLeft size={30} className="text-cyan-400" />
      </Button>

      {/* Carousel Container */}
      <div className="perspective-1000 w-full h-full flex items-center justify-center relative">
        {testimonials.map((testimonial, index) => {
          // Calculate rotation and depth effect
          const rotation = (index - currentIndex) * 60; // Adjust angle for spacing
          const isActive = index === currentIndex;

          return (
            <div
              key={index}
              className={`absolute w-80 transition-transform duration-500 ease-in-out transform ${
                isActive ? "z-10 scale-105 shadow-lg" : "z-0 opacity-50"
              }`}
              style={{
                transform: `rotateY(${rotation}deg) translateZ(-300px)`,
              }}
            >
              <Card className="bg-gray-800 text-white rounded-lg shadow-xl">
                <CardHeader>
                  <p className="text-xl italic">"{testimonial.quote}"</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-cyan-400">{testimonial.author}</p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mt-4 mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <Button 
        variant="ghost" 
        className="absolute top-1/2 right-4 -translate-y-1/2 p-1"
        onClick={handleNext}
      >
        <ChevronRight size={30} className="text-cyan-400" />
      </Button>
    </div>
  );
};

export default TestimonialCarousel;
