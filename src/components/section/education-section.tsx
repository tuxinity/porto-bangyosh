import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Education = {
  school: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
};

type EducationSectionProps = {
  educations: Education[];
};

export const EducationSection = ({ educations }: EducationSectionProps) => {
  return (
    <Card
      className="transition-all hover:shadow-xl border-none dark:bg-[#1c1c1c] bg-white/50 backdrop-blur-sm w-full"
      id="education"
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
          <span className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg">
            🎓
          </span>
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div key={index} className="pb-6">
              <h3 className="font-semibold text-lg lg:text-xl">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm lg:text-base">
                {edu.school} • {edu.period}
              </p>
              <p className="mt-2 text-sm lg:text-base">{edu.description}</p>
              <ul className="mt-2 space-y-1">
                {edu.achievements.map((achievement, i) => (
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
