import Image from "next/image";
import styles from "./About.module.scss";

type Trait = {
  imgSrc: string;
  imageAlt: string;
  name: string;
  desc: string;
};

type CollaborationCardProps = {
  ref?: React.Ref<HTMLDivElement>;
  title: string;
  subtitle: string;
  traits: Trait[];
};

export default function CollaborationCard({
  ref,
  title,
  subtitle,
  traits,
}: CollaborationCardProps) {
  return (
    <div ref={ref} className={`col-span-1 rounded-3xl border border-white/30 p-5 sm:col-span-2 xl:col-span-1 ${styles.collaborationCard}`}>
      <div className="mb-5">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base text-[#a2a2a2]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {traits.map((trait) => (
          <div key={trait.name} className={`cursor-default rounded-xl border border-[#1e1e1e] bg-[#161616] p-3.5 transition-colors duration-300 hover:border-[#2e2e2e] ${styles.trait}`}>
            <div className="mb-2 h-10 w-10">
              <Image src={trait.imgSrc} alt={trait.imageAlt} width={40} height={40}/>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-bold">
                {trait.name}
              </p>
              <p className="text-[11px] text-[#a2a2a2]">
                {trait.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}