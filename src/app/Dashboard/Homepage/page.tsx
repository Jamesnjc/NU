const Page = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <img
          src="/path-to-your-image.png" 
          alt="Community Help"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

  
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Synx</h1>
        <p className="mt-4 text-lg md:text-2xl">Dummy</p>
        <button className="px-6 py-3 mt-6 text-lg font-medium text-black bg-yellow-400 rounded hover:bg-yellow-500">
          Dummy
        </button>
      </div>

   
      <nav className="absolute top-0 left-0 z-20 w-full px-8 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Dummy</div>
        <div className="flex space-x-6 text-white">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#events" className="hover:text-yellow-400">Why Synx?</a>
          <a href="#about" className="hover:text-yellow-400">About us</a>
        </div>
      </nav>


      <div className="relative z-10 p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  
          <div className="h-24 bg-gray-300"></div>
          <div className="h-24 bg-gray-300"></div>
          <div className="h-24 bg-gray-300"></div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="h-40 bg-gray-300"></div>
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
          <div className="h-40 bg-gray-300"></div>
        </div>
      </div>

     
      <footer className="bg-gray-800 text-white py-4 mt-auto">
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
