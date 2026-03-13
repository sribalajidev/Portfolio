import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";


function ExperienceTimeline({ timeline }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    vertical: true, 
    verticalSwiping: true, 
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000, 
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className="timeline-wrapper">
      <div className="inner-content">
        <Slider {...settings}>
          {timeline.map((item, index) => (
            <div>
              <div key={index} className="timeline-item p-5 rounded-lg grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <div className="duration text-[16px]">{item.duration}</div>
                  <div className="role text-[32px] font-bold">{item.role}</div>
                  <div className="company text-[18px]">{item.company}</div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <a href={item.url} target="_blank">
                    <div className="img-wrapper">
                      <img src={item.img} alt={item.company} className="w-full h-auto" />
                      <div className="tag">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag-item text-[14px] px-2 py-1 mr-2 mb-2 inline-block">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="overlay-arrow"><FaArrowRight /></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ExperienceTimeline;