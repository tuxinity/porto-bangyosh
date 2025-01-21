import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket } from "lucide-react";

export const ComingSoon = () => {
  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <Card className="w-[350px] bg-black bg-opacity-30 backdrop-blur-md border-gray-500">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-200">
            <Rocket className="w-8 h-8 text-gray-900 dark:text-gray-200" />
            Coming Soon
          </CardTitle>
          <CardDescription className="text-gray-900 dark:text-gray-200">
            Our awesome new site is under construction!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm dark:text-gray-100 mb-4">
            We're working hard to bring you something amazing. Stay tuned for an
            out-of-this-world experience!
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-xs dark:text-gray-300">
            ©{new Date().getFullYear()} Bangyosh. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
