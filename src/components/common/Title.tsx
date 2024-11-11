import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  desc?: string;
  className?: string;
};

const Title = ({ title, desc, className }: TitleProps) => {
  return (
    <div className="max-w-lg mx-auto ">
      <h3
        className={cn("text-2xl sm:text-3xl font-bold text-center", className)}>
        {title}
      </h3>

      <p className="text-sm sm:text-lg font-semibold text-center">{desc}</p>
    </div>
  );
};
export default Title;
