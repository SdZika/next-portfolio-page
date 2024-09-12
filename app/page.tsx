import Image from "next/image";
import { TextAnimation } from "./components/TextAnimation";

export default function Home() {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[100vh] py-12 mx-auto bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
          <Image src="/images/portfolio.png" alt="hero" width={350} height={350} />
      </div>
      <div className="col-span-2 px-5 my-auto ">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a </span>
          <br />
          <TextAnimation />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Marko Zivkovic and I have 2+ years experience in web
          development.
        </p>
        <div className="my-8">
          <a
            //href="cv.pdf"
            //download="cv.pdf"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a
            //href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-pink-500  text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
      
  );
}
