import styles from "./About.module.scss";
import dynamic from "next/dynamic";

const Globe = dynamic(
  () => import("@/components/ui/Globe/Globe"),
  {
    ssr: false,
  }
);

type TimezoneCardProps = {
  ref?: React.Ref<HTMLDivElement>;
  title: string;
  subtitle: string;
};

export default function TimezoneCard({
  ref,
  title,
  subtitle,
}: TimezoneCardProps) {
  return (
    <div ref={ref} className={`col-span-1 rounded-3xl border border-white/30 ${styles.timezoneCard}`}>
      <div className="p-5">
        <p className="text-2xl font-bold">{title}</p>

        <p className="text-base text-[#a2a2a2]">
          {subtitle}
        </p>
      </div>

      <div className={styles.globeContainer}>
        <Globe />
      </div>
    </div>
  );
}