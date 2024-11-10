import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: TitleProps) => {
  return (
    <div className="max-w-lg mx-auto ">
      <h3
        className={cn("text-2xl sm:text-3xl font-bold text-center", className)}>
        {title}
      </h3>
    </div>
  );
};
export default Title;
