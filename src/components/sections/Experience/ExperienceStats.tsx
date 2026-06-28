type ExperienceStat = {
  value: string;
  label: string;
};

type ExperienceStatsProps = {
  stats: ExperienceStat[];
};

export default function ExperienceStats({
  stats,
}: ExperienceStatsProps) {
  return (
    <div className="pt-6 lg:pt-12">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4">
            <span className="text-4xl font-bold" data-counter={/^\d/.test(stat.value)}>
              {stat.value}
            </span>

            <p className="text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}