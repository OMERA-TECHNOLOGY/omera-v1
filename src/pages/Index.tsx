import { CustomCursor } from "@/components/CustomCursor";
import NavBar from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <NavBar />
      <Hero />
      <About />
      <CaseStudies />
      <WhyChoose />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
