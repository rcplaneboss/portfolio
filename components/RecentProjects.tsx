import { projects } from "@/data";
import {PinContainer} from "/components/ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa";
const RecentProjects = () => {
  return (
    <section id="recent-projects" className="py-20 relative top-0 left-0">
      <h1 className="heading">
        A small selection of my {" "} 
        <span className="text-purple">recent projects</span>
     </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-8  mt-10">
              {projects.map(({id , title, link, img, des, iconLists,}) => (
                  <div key={id} className="lg:min-h-[32rem] sm:h-[41rem] h-[32rem] sm:w-[570px] not-first:flex items-center justify-center w-[80vw]">
                    <PinContainer title={link} href={link}>
                     <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div className="w-full h-full relative overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img src="/bg.png" alt="bg-img"/>
                     </div>
                     <img src={img} alt={title} className="z-10 absolute bottom-0"/>
                     </div>
                     <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                    <p className="lg:text-xl lg:font-normal font-light text-xl line-clamp-2">{des}</p>
                    
                    <div className="flex justify-between items-center mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, ind) => (
                          <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
                            transform: `translateX(-${5 * ind * 2}px;)`
                          }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center itex-center">
                        <p className="flex lg:text-xl md:text-xs text-xm text-purple">Visit Live Site</p>
                      <FaLocationArrow className="ms-3" color='#CBACF9' />
                      </div>
                    </div>
                    </PinContainer>
                    </div>   
              ))}
          </div>
    </section>
  );  
};

export default RecentProjects;
