type ExperienceHeaderProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function ExperienceHeader({
  subtitle,
  title,
  description,
}: ExperienceHeaderProps) {
  return (
    <>
      <div>
        <p className="text-base">
          {subtitle}
        </p>

        <h2 className="mb-5 max-w-[500px] text-[42px] font-bold">
          {title}
        </h2>
      </div>

      <p className="text-lg">
        {description}
      </p>
    </>
  );
}