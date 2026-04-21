import { pageContent } from "../../utils/pageContent";
import "./ProcessCard.scss";

function ProcessCard() {
  const { process } = pageContent.about.collob[0];

  return (
    <div className="process-card p-5 border border-white/30 rounded-3xl flex flex-col">
      <div className="title-wrapper mb-5">
        <p className="text-2xl font-bold">From brief to shipped</p>
        <p className="text-[16px] text-[#a2a2a2]">My process</p>
      </div>
      <div className="process-steps flex flex-col justify-between gap-5 h-full pb-5">
        {process.map( ( step, index ) => (
          <div className="process-step relative flex gap-3 items-center cursor-default" key={index}>
            <div className="step-num text-[12px] w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#2a2a2a] font-bold flex items-center justify-center shrink-0">{step.num}</div>
            <div className="step-content">
              <p className="text-[14px] font-bold mb-1">{step.title}</p>
              <p className="text-[11px] text-[#a2a2a2]">{step.detail}</p>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
}

export default ProcessCard;