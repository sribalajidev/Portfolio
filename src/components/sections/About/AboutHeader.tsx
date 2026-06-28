type AboutHeaderProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function AboutHeader({
  subtitle,
  title,
  description,
}: AboutHeaderProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-2">
        <p className="text-base">
          {subtitle}
        </p>

        <h2 className="text-[42px] font-bold leading-none">
          {title}
        </h2>
      </div>

      <div>
        <p className="text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}