import './HeroBanner.scss';
import heroImg from '../../assets/images/hero.png';
import { pageContent } from "../../utils/pageContent";

function HeroBanner() {
  const { tagline, badge, description, imageSrc, imageAlt } = pageContent.hero;

  return (
    <section className="herobanner-wrapper">
      <div className="img-wrapper">
        <img src={imageSrc} alt={imageAlt} className="main-img" />
      </div>
      <div className="content-wrapper">
        <div className="left-content">
          <div className="available-badge">
            <div className="circContainer">
              <div className="circ"></div>
              <div className="circPulse one"></div>
              <div className="circPulse two"></div>
            </div>
            {badge}
          </div>
          <div className="introText">
            {tagline}
          </div>
        </div>
        <div className="right-content">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;