import Image from "next/image";
import styles from "./About.module.scss";

import { Collaboration } from "@/sanity/types/about";
import { urlFor } from "@/sanity/lib/image";

interface CollaborationCardProps extends Collaboration {
  ref?: React.Ref<HTMLDivElement>;
}

export default function CollaborationCard({
  ref,
  title,
  subtitle,
  traits,
}: CollaborationCardProps) {
  return (
    <div
      ref={ref}
      className={`col-span-1 rounded-3xl border border-white/30 p-5 sm:col-span-2 xl:col-span-1 ${styles.collaborationCard}`}
    >
      <div className="mb-5">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base text-[#a2a2a2]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {traits.map((trait) => (
          <div
            key={trait._key}
            className={`cursor-default rounded-xl border border-[#1e1e1e] bg-[#161616] p-3.5 transition-colors duration-300 hover:border-[#2e2e2e] ${styles.trait}`}
          >
            <div className="mb-2 h-10 w-10">
              <Image
                src={urlFor(trait.image.image).width(40).height(40).url()}
                alt={trait.image.alt}
                width={40}
                height={40}
              />
            </div>

            <div>
              <p className="mb-1.5 text-xs font-bold">
                {trait.name}
              </p>

              <p className="text-[11px] text-[#a2a2a2]">
                {trait.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}