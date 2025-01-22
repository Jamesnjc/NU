"use client";
import Image from "next/image";
import SynxLogo from "./synx.png";
import Bg from "./Lake4.jpg";
import Image1 from "./yacht.jpg";
import Image2 from "./yacht1.jpg";
import Image3 from "./yacht3.jpg";
import Interior from "./interior.jpg";
import Interior2 from "./interior2.jpg";
import { useEffect, useState } from "react";
import bg1 from "./yacht2.jpg";
import bg2 from "./yacht4.jpg";
import bg3 from "./yacht5.jpg";
import Link from 'next/link';

const Page = () => {
  const slideshowImages = [Bg, bg1, bg2, bg3]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 7000);

    return () => clearInterval(interval); 
  }, [slideshowImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-10");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const elements = document.querySelectorAll(".image-container, .lower-content");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image} alt={`Slideshow Image ${index}`} layout="intrinsic" objectFit="cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <nav className="sticky top-0 left-0 z-20 w-full px-8 py-4 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <div className="relative w-32 h-12">
            <Image src={SynxLogo} alt="Synx Logo" layout="fill" objectFit="contain" />
          </div>
        </div>

        <div className="flex space-x-6" style={{ color: "#6A00D1" }}>
          <Link href="/Dashboard/Homepage">
            <p className="text-xl font-bold hover:text-[#440086]">Home</p>
          </Link>
          <Link href="/Dashboard/Docu">
            <p className="text-xl font-bold hover:text-[#440086]">Why Synx?</p>
          </Link>
          <Link href="/Dashboard/AboutUs">
            <p className="text-xl font-bold hover:text-[#440086]">About us</p>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Synx</h1>
        <p className="mt-3 mb-12 text-lg md:text-2xl font-DancingScript italic">
          Exclusive Yacht Club
        </p>
      </div>

      <div className="relative z-10 p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group image-container opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0">
              <Image
                src={Image1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-[#4E4E4E] text-white flex rounded-xl justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-xl font-italic ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>

          <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group image-container opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0">
              <Image
                src={Image2}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-[#4E4E4E] text-white flex justify-center rounded-xl items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-xl font-italic ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group image-container opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0">
              <Image
                src={Image3}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-[#4E4E4E] text-white flex rounded-xl justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-xl font-italic ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
          <div className="h-50 bg-gray-300 rounded-xl lower-content opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <Image
              src={Interior}
              alt="Interior"
              width={2000}
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
          <div className="text-right lower-content opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="text-left lower-content opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
          <div className="h-50 bg-gray-300 rounded-xl lower-content opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
            <Image
              src={Interior2}
              alt="Interior 2"
              width={2000}
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-violet-700 text-white py-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Synx. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#privacy" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-yellow-400">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
