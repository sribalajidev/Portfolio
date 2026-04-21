import { pageContent } from "../../utils/pageContent";
import './CollabCard.scss';

function CollabCard() {
  const { title, subtitle, traits } = pageContent.about.collob[0];

  return (
    <div className="collab-card p-5 border border-white/30 rounded-3xl col-span-1 sm:col-span-2 xl:col-span-1">
      <div className="title-wrapper mb-5">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-[16px] text-[#a2a2a2]">{subtitle}</p>
      </div>  
      <div className="traits-wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
        {traits.map( ( trait, index ) => (
          <div className="trait bg-[#161616] border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-300 cursor-default rounded-xl p-3.5" key={index}>
            <div className="icon w-10 h-10 mb-2">
              <img src={trait.imgSrc} alt={trait.imageAlt} />
            </div>
            <div className="trait-content">
              <p className="text-[12px] font-bold mb-1.5">{trait.name}</p>
              <p className="text-[11px] text-[#a2a2a2]">{trait.desc}</p>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
}

export default CollabCard;