import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

const WhyChooseUsCard = ({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
}) => {
  return (
    <Card className="group w-[300px] h-[250px] text-center flex flex-col items-center justify-center gap-4 px-4 hover:bg-primary transition-all duration-500 ease-in-out">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="max-w-max p-3 bg-primary rounded-full flex items-center justify-center group-hover:bg-background transition-all duration-500 ease-in-out">
          <Icon className="size-10 text-white/90 group-hover:text-foreground transition-all duration-500 ease-in-out" />
        </div>
        <span className="text-xl font-semibold text-foreground group-hover:text-background transition-all duration-500 ease-in-out">
          {title}
        </span>
      </div>

      <p className="text-sm text-gray-600 group-hover:text-background transition-all duration-500 ease-in-out">
        {desc}
      </p>
    </Card>
  );
};
export default WhyChooseUsCard;
