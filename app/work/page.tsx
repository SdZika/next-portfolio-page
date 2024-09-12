import { WorksList } from "../components/WorksList";
import Image from "next/image";

const Work = () => {

  const filterdWorks = WorksList.filter((work, index) => index < 3);
  return (
    <div className="max-w-[1200px] mx-auto py-12 h-screen" id="work" >
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color mx-6">Work</p>
        <p className="text-gray-400 mx-6">Check out some of my recent work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {filterdWorks.map((mywork) => (
          <div
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center bg-cover relative"
            key={mywork.id}
          >
            <Image src={mywork.image} alt={mywork.title} />
            <div className="opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {mywork.title}
              </span>
              <div className="pt-8 text-center">
                <a href={mywork.url} target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work