import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/constant/dummy";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  ProjectSection,
  HeroSection,
} from "@/components/section";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection
        email={PERSONAL_DATA.email}
        location={PERSONAL_DATA.location}
        name={PERSONAL_DATA.name}
        role={PERSONAL_DATA.role}
      />

      <div className="space-y-8 lg:space-y-10">
        <AboutSection
          bio={PERSONAL_DATA.bio}
          skills={PERSONAL_DATA.skills}
          interests={PERSONAL_DATA.interests}
        />
        <EducationSection educations={PERSONAL_DATA.education} />
        <ExperienceSection experiences={PERSONAL_DATA.experience} />
        <ProjectSection projects={PERSONAL_DATA.projects} />
      </div>
    </motion.div>
  );
};

export default HomePage;