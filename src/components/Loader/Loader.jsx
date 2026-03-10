import { useEffect, useRef } from "react";
import "./Loader.scss";

function Loader({ start, onFinish }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.classList.add("start");

    const line = wrapper.querySelector(".line");

    const handleLineEnd = () => {
      wrapper.classList.add("wipe");

      // Wipe transition takes 800ms → Remove loader after that
      setTimeout(onFinish, 800);
    };

    line.addEventListener("transitionend", handleLineEnd, { once: true });

    return () => line.removeEventListener("transitionend", handleLineEnd);
  }, [start, onFinish]);

  return (
    <div ref={wrapperRef} className="loader-wrapper">
      <div className="title">Sri Balaji</div>
      <div className="line" />
    </div>
  );
}

export default Loader;
