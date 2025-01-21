import { ComingSoon } from "@/components/coming-soon";
import { Space3d } from "./components/space-3d";

const IndiePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Space3d />
      </div>
      <ComingSoon />
    </div>
  );
};

export default IndiePage;
