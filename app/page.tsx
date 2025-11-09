import { CustomCursor } from "@/components/CustomCursor";
import NavBar from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Index;
