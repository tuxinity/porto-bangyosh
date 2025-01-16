import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const MobileHeader = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileHeaderProps) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">Yosa Agung</span>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </Button>
        </div>
      </div>
    </div>
  );
};
