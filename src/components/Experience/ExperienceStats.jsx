function ExperienceStat({ stats }) {
  return (
    <div className="experience-stats-wrapper lg:pt-[50px]">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div className="p-4" key={index}>
            <span className="text-4xl font-bold">
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

export default ExperienceStat;