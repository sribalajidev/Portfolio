import './StackCard.scss';
import { pageContent } from "../../utils/pageContent";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function StackCard() {
  const { experience } = pageContent;
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <section className="experience-wrapper py-10 px-5 lg:py-[100px] lg:px-[50px]">
      <div className="header-content max-w-5xl">
        <div className="sub-title text-[16px]">{experience.subtitle}</div>
        <div className="title text-[42px] font-bold mb-[21px]">{experience.title}</div>
        <p>{ experience.description }</p>
      </div>
      <div className="experience-cards mt-10  flex flex-col gap-5">
        {experience.timeline.map((item, index) => (
          <div key={index} className="experience-card my-5"
            style={{
            position: "sticky",
            top: `${headerHeight * index}px`,
            zIndex: index + 1
          }}>
            <div className="card-header flex flex-col md:flex-row items-center justify-between pb-4" ref={index === 0 ? headerRef : null}>
              <div className="title-wrapper">
                <div className="role text-[21px] font-bold"><span className="text-[32px]">{item.role}</span>, {item.company}</div>
                <div className="company text-[18px]">{item.duration}</div>
              </div>
              <div className="tags mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag text-[12px] px-2 py-1 bg-gray-200 rounded">{tag}</span>
                ))}
              </div>
            </div>
            <div className="card-details flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-2/5 p-4">
                <div className="flex gap-4">
                  {item.project.map((proj, i) => (
                    <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link overflow-hidden rounded-[20px]">
                      <img src={proj.imgSrc} alt={`${proj.name} Logo`} className="w-40 h-25 object-fill" />
                      <div className="pointer"><FaArrowRight /></div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-3/5 p-4">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-[14px] mb-2">{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
}

export default StackCard;