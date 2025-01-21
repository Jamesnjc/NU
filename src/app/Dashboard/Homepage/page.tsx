import Image from "next/image";
import SynxLogo from "./synx.png";
import Bg from "./Lake4.jpg";
import Image1 from "./yacht.jpg";  
import Image2 from "./yacht1.jpg";  
import Image3 from "./yacht3.jpg";  
import Interior from "./interior.jpg";  
import Interior2 from "./interior2.jpg";  

const Page = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <Image
          src={Bg}
          alt=""
          layout="intrinsic"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <nav className="sticky top-0 left-0 z-20 w-full px-8 py-4 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <div className="relative w-32 h-12">
            <Image
              src={SynxLogo}
              alt="Synx Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex space-x-6" style={{ color: '#6A00D1' }}>
          <a
            href="#home"
            className="text-xl font-bold hover:text-[#440086]"
          >
            Home
          </a>
          <a
            href="#events"
            className="text-xl font-bold hover:text-[#440086]"
          >
            Why Synx?
          </a>
          <a
            href="#about"
            className="text-xl font-bold hover:text-[#440086]"
          >
            About us
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Synx</h1>
        <p className="mt-3 mb-12 text-lg md:text-2xl font-DancingScript italic">
          Exclusive Yacht Club 
        </p>
      </div>

      <div className="relative z-10 p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group">
      <div className="absolute inset-0 ">
        <Image
          src={Image1}
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform rounded-xl group-hover:rotate-y-180"
        />
      </div>
      <div className="absolute inset-0 bg-[#4E4E4E] text-white flex rounded-xl justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-xl font-bold">Your Text Here</p>
      </div>
    </div>

      <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group">
      <div className="absolute inset-0">
        <Image
          src={Image2}
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform rounded-xl group-hover:rotate-y-180"
        />
      </div>
      <div className="absolute inset-0 bg-[#4E4E4E] text-white flex justify-center rounded-xl items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-xl font-bold">Your Text Here</p>
      </div>
    </div>
    
    <div className="h-48 w-full md:w-50 relative border-4 border-[#4E4E4E] rounded-2xl group">
      <div className="absolute inset-0">
        <Image
          src={Image3}
          alt="Image 3"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform rounded-xl group-hover:rotate-y-180"
        />
      </div>
      <div className="absolute inset-0 bg-[#4E4E4E] text-white flex rounded-xl justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-xl font-bold">Your Text Here</p>
      </div>
    </div>
    
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9 ">
        <div className="h-50 bg-gray-300 rounded-xl">
        <Image
          src={Interior}
          alt="Image 3"
          width={2000}
          objectFit="contain" 
          className="rounded-xl"
        />
      </div>

          <div className="text-right">
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="text-left">
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
          </div>
          <div className="h-50 bg-gray-300 rounded-xl"> 
          <Image
          src={Interior2}
          alt="Image 3"
          width={2000}
          objectFit="contain" 
          className="rounded-xl"
        /></div>
        </div>
      </div>

      <footer className="bg-violet-700 text-white py-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Synx. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-400">Terms of Service</a>
            <a href="#contact" className="hover:text-yellow-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
