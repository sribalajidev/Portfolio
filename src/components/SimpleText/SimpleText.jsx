import { pageContent } from "../../utils/pageContent";
import './SimpleText.scss';
import GlobeCard from "../GlobeCard";
import CollabCard from "../CollabCard";
import ProcessCard from "../ProcessCard";

function About() {
  const { subtitle, title, description, cards } = pageContent.about;

  return (
    <section className="bg-black mt-2.5 text-white py-10 px-5 lg:py-[100px] lg:px-[50px] rounded-t-[30px] lg:rounded-t-[50px]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
        <div className="title-wrapper">
          <div className="sub-title text-[16px]">{subtitle}</div>
          <div className="title text-[42px] font-bold">{title}</div>
        </div>
        <div className="content">
          <p className="text-[18px] font-normal">{description}</p>
        </div>
      </div>
      <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:mt-20">
        <CollabCard />
        <ProcessCard />
        <GlobeCard />
      </div>
    </section>
  );
}

export default About;
