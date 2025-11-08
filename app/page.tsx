import { CustomCursor } from "@/components/CustomCursor";
import NavBar from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <NavBar />
      <Hero />
    </div>
  );
};

export default Index;
