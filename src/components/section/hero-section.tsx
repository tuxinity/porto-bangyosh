import { motion } from "framer-motion";
import { Background3D } from "../background-3d";

type HeroSectionProps = {
  name: string;
  role: string;
  email: string;
  location: string;
};

export const HeroSection = ({
  name,
  role,
  email,
  location,
}: HeroSectionProps) => {
  return (
    <div>
      <div className="absolute inset-0">
      <Background3D />
      </div>
      <motion.div 
        className="mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="p-4 rounded-full bg-accent/10 mb-6 inline-flex"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <span className="text-4xl lg:text-5xl">👨‍💻</span>
        </motion.div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 py-2">{name}</h1>
        <p className="text-lg lg:text-xl text-muted-foreground">{role}</p>
        <p className="text-muted-foreground mt-2 text-sm lg:text-base">
          📍 {location} • 📧 {email}
        </p>
      </motion.div>
    </div>
  );
};
