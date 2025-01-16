import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

type ExperienceSectionProps = {
  experiences: Experience[];
};

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <Card
      id="experience"
      className="transition-all hover:shadow-xl border-none 
      dark:bg-[#1c1c1c] bg-white/50 backdrop-blur-sm w-full"
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
          <span className="text-green-500 bg-green-500/10 p-2 rounded-lg">
            💼
          </span>
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-6">
              <h3 className="font-semibold text-lg lg:text-xl">{exp.role}</h3>
              <p className="text-muted-foreground text-sm lg:text-base">
                {exp.company} • {exp.period}
              </p>
              <p className="mt-2 text-sm lg:text-base">{exp.description}</p>
              <ul className="mt-2 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
