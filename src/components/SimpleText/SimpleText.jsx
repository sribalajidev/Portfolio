import { pageContent } from "../../utils/pageContent";
import './SimpleText.scss';

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

      <div className="card-wrapper flex flex-wrap gap-6 mt-10 lg:mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card-item glass flex flex-col justify-between p-5 border-radius-[20px] min-h-[250px]"
          >
            <div className="text-[24px] font-bold">{card.title}</div>
            <p className="text-[16px]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
