import { CustomCursor } from "@/components/CustomCursor";
import NavBar from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <NavBar />
      <Hero />
      <About />
      <CaseStudies />
    </div>
  );
};

export default Index;
