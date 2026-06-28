import styles from "./About.module.scss";

type ProcessStep = {
  num: number;
  title: string;
  detail: string;
};

type ProcessCardProps = {
  ref?: React.Ref<HTMLDivElement>;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

export default function ProcessCard({
  ref,
  title,
  subtitle,
  steps,
}: ProcessCardProps) {
  return (
    <div ref={ref} className={`flex flex-col rounded-3xl border border-white/30 p-5 ${styles.processCard}`}>
      <div className="mb-5">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base text-[#a2a2a2]">{subtitle}</p>
      </div>

      <div  className={`flex h-full flex-col justify-between gap-5 pb-5 ${styles.processSteps}`}>
        {steps.map((step) => (
          <div key={step.num} className={`relative flex cursor-default items-center gap-3 ${styles.processStep}`}>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#2a2a2a] text-xs font-bold ${styles.stepNumber}`}>
              {step.num}
            </div>

            <div>
              <p className="mb-1 text-sm font-bold">
                {step.title}
              </p>

              <p className="text-[11px] text-[#a2a2a2]">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}