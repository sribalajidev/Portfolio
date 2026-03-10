import './Footer.scss';
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="footer-content">
        <div className="title">
          Got a Vision? Let's Bring It to Life!
        </div>
        <p>I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.</p>
        <div className="footer-btn">Say Hello <FaArrowRight /></div>
      </div>
      {/* <div className="bottom-wrapper">
        <a href="mailto:s.sribalaji.dev@gmail.com" className="mail-text">s.sribalaji.dev@gmail.com </a>
      </div> */}
    </section>
  );
}

export default Footer;