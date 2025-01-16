import { useState } from "react";
import { ThemeProvider } from "../theme-provider";
import { MobileHeader } from "./mobile-header";
import { Sidebar } from "../sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="system">
      <div className="relative min-h-screen lg:flex">
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-1 min-h-screen pt-16 lg:pt-0 dark:bg-[#141414] bg-background/90 backdrop-blur-md">
        <div className="mx-auto px-5 my-10">
          {children}
        </div>
      </main>
      </div>
    </ThemeProvider>
  );
};
