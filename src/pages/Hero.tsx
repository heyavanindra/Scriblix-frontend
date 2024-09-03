import { Link } from "react-router-dom";
import {ReactTyped} from "react-typed";

function Hero() {
  return (
    <div className="bg-[#f5f5dc] w-full ">
      <div className=" mt-[-60px] h-screen mx-auto text-center flex flex-col justify-center w-full">
        <p className="text-[#4f6dc0] font-bold p-2 text-4xl">Welcome to Scriblix</p>
        <h1 className="text-4xl md:text-7xl sm:text-6xl font-bold md:py-6">
          Your Blogging Hub
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Discover and Share Insights on
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["Tech", "Lifestyle", "Travel", "Food"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div>
          <button className="bg-[#4f6dc0] w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-300">
            <Link to={'/signup'}>Get Started</Link>
          </button>
        </div>
        <p>
          Already have an account? <Link to={"/signin"} className="text-purple-700">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
