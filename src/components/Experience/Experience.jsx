import './Experience.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pageContent } from "../../utils/pageContent";
import ExperienceStat from "./ExperienceStats";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceProjects from "./ExperienceProjects";

function Experience() {
  const { experience } = pageContent;
  return(
    <section className="experience-wrapper py-10 px-5 lg:py-[100px] lg:px-[50px]" id="experience">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-5 left-col flex flex-col gap-[50px]">
          <div className="title-wrapper">
            <div className="sub-title text-[16px]">{experience.subtitle}</div>
            <div className="title text-[42px] font-bold mb-[21px] max-w-[500px]">{experience.title}</div>
          </div>
          <ExperienceStat stats={experience.stats} />
          <p className='text-[18px] max-w-[400px]'>{experience.description}</p>
        </div>
        <div className="col-span-12 xl:col-span-7 right-col">
          <ExperienceTimeline timeline={experience.timeline} />
          <ExperienceProjects projects={experience.projects} />
        </div>
      </div>
    </section>
  );
}

export default Experience;