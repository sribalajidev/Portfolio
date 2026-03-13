import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

function ExperienceProjects({ projects }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000, 
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };
  return(
    <div className="projects-wrapper">
      <div className="text-[21px] font-bold mb-5">Key Projects</div>
      <Slider {...settings}>
      {projects.map((project, index) => (
        <div>
          <a href={project.url} target="_blank" key={index} className="project-card flex flex-col gap-3 mb-5">
            <img src={project.img} alt={project.title} className="w-full h-auto rounded-lg" />
            <div className="inner-content">
              <div className="project-title text-[18px] font-semibold">{project.title}</div>
              <div className="overlay-arrow"><FaArrowRight /></div>
            </div>
          </a>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default ExperienceProjects;