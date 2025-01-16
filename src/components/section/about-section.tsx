import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AboutSkill = {
  name: string;
};

type AboutInterest = {
  name: string;
  color: string;
};

type AboutSectionProps = {
  bio: string;
  skills: AboutSkill[];
  interests: AboutInterest[];
};

export const AboutSection = ({ bio, skills, interests }: AboutSectionProps) => {
  return (
    <Card
      id="about"
      className="transition-all hover:shadow-xl border-none 
    dark:bg-[#1c1c1c] bg-white/50 backdrop-blur-sm w-full"
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex font-mplus items-center gap-3 text-xl lg:text-2xl">
          <span className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
            🎯
          </span>
          About Me
        </CardTitle>
        <CardDescription className="text-base lg:text-lg indent-8 text-justify hyphens-auto">
          {bio}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest.name}
                  className={`px-4 py-2 text-sm bg-${interest.color}-500/10 text-${interest.color}-600 hover:bg-${interest.color}-500/20`}
                >
                  {interest.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
