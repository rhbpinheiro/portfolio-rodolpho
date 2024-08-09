"use client";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarroselItem";
import { Projeto } from "@/interfaces/interface";
import { MaterialSymbolsArrowForwardIosRounded } from "@/icons/ArrowRight";
import { MaterialSymbolsArrowBackIosRounded } from "@/icons/ArrowLeft";


interface CarouselProps {
  projetos: Projeto[];
}

const Carousel: React.FC<CarouselProps> = ({ projetos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const goToImage = (index: number) => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setImageOpacity(1);
    }, 500);
  };

  const goToNextImage = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === projetos.length - 1 ? 0 : prevIndex + 1
      );
      setImageOpacity(1);
    }, 500);
  };

  const goToPrevImage = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? projetos.length - 1 : prevIndex - 1
      );
      setImageOpacity(1);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 6000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="relative lg:px-6 md:max-w-[90vw] xl:max-w-[70vw] lg:max-w-[80vw]">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {projetos.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
            } mx-1 md:mx-2 cursor-pointer`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2  transform -translate-y-1/2 cursor-pointer p-1 md:p-2"
        onClick={goToPrevImage}
      >
        <MaterialSymbolsArrowBackIosRounded width="2em" height="2em" className="text-blue-500 dark:text-gray-200" />
      </button>
      <CarouselItem projeto={projetos[currentImageIndex]} />

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bottom-3"
        onClick={goToNextImage}
      >
        <MaterialSymbolsArrowForwardIosRounded width="2em" height="2em" className="text-blue-500 dark:text-gray-200" />
      </button>
    </div>
  );
};

export default Carousel;
