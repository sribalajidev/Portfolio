import './Footer.scss';
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formSubmitted = useRef(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  const handleIframeLoad = () => {
    if (formSubmitted.current) {
      setSubmitted(true);
      formSubmitted.current = false;

      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  const handleNewResponse = () => {
    setSubmitted(false);
  };

  return (
    <>
      <section className="footer-wrapper" id="contact">
        <div className="footer-content">
          <div className="title">
            Got a Vision? Let's Bring It to Life!
          </div>
          <p>I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.</p>
          <div className="footer-btn" onClick={() => setIsContactOpen(true)}>Say Hello <FaArrowRight /></div>
        </div>
        {/* <div className="bottom-wrapper">
          <a href="mailto:s.sribalaji.dev@gmail.com" className="mail-text">s.sribalaji.dev@gmail.com </a>
        </div> */}
      </section>
      <div className={`contact-overlay ${isContactOpen ? "open" : ""}`} onClick={() => setIsContactOpen(false)}></div>
      <div className={`contact-panel ${isContactOpen ? "open" : ""}`}>
          <div className='form-header'>
            <h4>Let's Create Something Great Together</h4>
            <div className='close-btn' onClick={() => setIsContactOpen(false)}>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className='form-wrapper'>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title="hidden-iframe" onLoad={handleIframeLoad}/>
            {!submitted && (
            <form className="contact-form" action="https://docs.google.com/forms/d/e/1FAIpQLSe5t3_1Dit_cD1yjJVX5WCwPmsZ7p6SitMro4ncLQXboKBr3A/formResponse" method="POST" target="hidden_iframe" onSubmit={() => (formSubmitted.current = true)}>
              <p> Hi, my name is
              <input type="text" name="entry.352013793" className="lg:w-[180px]" placeholder="Your name" required />
              You can reach me at
              <input type="email" name="entry.1258670128" className="lg:w-[250px]" placeholder="email@example.com" required /></p>
              <p>I'm reaching out regarding
              <input type="text" name="entry.576254416" className="lg:w-[500px]" placeholder="job opportunity, collaboration, or just saying hi" required /></p>
              <p>Here's a bit more about it
              <input type="text" name="entry.576254416" className="lg:w-[500px]" placeholder="Tell me about your idea..." required />
              </p>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
             )}

             {submitted && (
                <div className="success-message">
                  <div className='container'>
                    <div className='content'>
                      <h3>Thank you for your submission!</h3>
                      <button onClick={handleNewResponse} className='btn-resubmit'>
                        Submit another response
                      </button>
                    </div>
                  </div>
                </div>
             )}
          </div>

          
            
        </div>
    </>
  );
}

export default Footer;