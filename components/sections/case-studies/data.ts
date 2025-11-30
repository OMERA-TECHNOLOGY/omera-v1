export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  gradient: string;
  darkGradient: string;
  stats: {
    users?: string;
    performance?: string;
    rating?: string;
    growth?: string;
  };
  image: string;
  results: string[];
  liveUrl: string;
  githubUrl: string;
  projectType: "landing-page" | "management-system";
}

export const projects: Project[] = [
  {
    title: "Omera Hotel",
    description:
      "Comprehensive hotel management system with real-time booking, inventory management, payment integration, and multi-language support.",
    category: "Hospitality Management System",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    gradient: "from-amber-500 via-orange-600 to-red-700",
    darkGradient: "from-amber-600 via-orange-700 to-red-800",
    stats: {
      users: "50+",
      performance: "99.8%",
      rating: "4.8",
      growth: "180%",
    },
    image: "/images/omera-hotel.jpg",
    results: [
      "Automated 80% of manual operations",
      "Increased booking efficiency by 65%",
      "Reduced administrative costs by 45%",
    ],
    liveUrl: "https://omera-hotel.vercel.app",
    githubUrl: "https://github.com/yourusername/omera-hotel",
    projectType: "management-system",
  },
  {
    title: "Addis Hotel",
    description:
      "Elegant landing page showcasing premium hospitality services with seamless booking integration and stunning visuals.",
    category: "Hospitality Landing Page",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    darkGradient: "from-blue-600 via-indigo-700 to-purple-800",
    stats: {
      users: "25K+",
      performance: "99.9%",
      rating: "4.9",
      growth: "150%",
    },
    image: "/images/addis-hotel.jpg",
    results: [
      "Increased direct bookings by 75%",
      "Improved page load speed by 60%",
      "Enhanced mobile conversion rate by 45%",
    ],
    liveUrl: "https://addis.omera.tech",
    githubUrl: "https://github.com/yourusername/addis-hotel",
    projectType: "landing-page",
  },
  {
    title: "Enatcare Health Institute",
    description:
      "Modern healthcare landing page featuring service showcases, doctor profiles, and appointment scheduling.",
    category: "Healthcare Landing Page",
    technologies: ["React", "TypeScript", "GSAP", "CSS3"],
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    darkGradient: "from-green-600 via-emerald-700 to-teal-800",
    stats: {
      users: "15K+",
      performance: "99.8%",
      rating: "4.7",
      growth: "200%",
    },
    image: "/images/enatcare-health.jpg",
    results: [
      "Increased appointment requests by 90%",
      "Improved user engagement by 55%",
      "Enhanced mobile experience by 70%",
    ],
    liveUrl: "https://enatcare.omera.tech",
    githubUrl: "https://github.com/yourusername/enatcare-health-institute",
    projectType: "landing-page",
  },
  {
    title: "Muse Clinic",
    description:
      "Aesthetic medical clinic landing page with elegant design, service showcases, and patient testimonials.",
    category: "Medical Landing Page",
    technologies: ["Next.js", "Tailwind", "Three.js", "Framer Motion"],
    gradient: "from-pink-500 via-rose-600 to-fuchsia-700",
    darkGradient: "from-pink-600 via-rose-700 to-fuchsia-800",
    stats: {
      users: "12K+",
      performance: "99.9%",
      rating: "4.8",
      growth: "175%",
    },
    image: "/images/muse-clinic.jpg",
    results: [
      "Boosted consultation requests by 85%",
      "Improved brand perception by 60%",
      "Increased social media referrals by 40%",
    ],
    liveUrl: "https://muse.omera.tech",
    githubUrl: "https://github.com/yourusername/muse-clinic",
    projectType: "landing-page",
  },
  {
    title: "Kereyu Hotel",
    description:
      "Luxury hotel landing page featuring premium accommodations, immersive gallery, and seamless reservation system.",
    category: "Luxury Hospitality Landing",
    technologies: ["Next.js", "TypeScript", "Swiper.js", "Tailwind"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    darkGradient: "from-cyan-600 via-blue-700 to-indigo-800",
    stats: {
      users: "18K+",
      performance: "99.7%",
      rating: "4.9",
      growth: "160%",
    },
    image: "/images/kereyu-hotel.jpg",
    results: [
      "Increased luxury bookings by 95%",
      "Enhanced user experience by 65%",
      "Improved SEO ranking by 50%",
    ],
    liveUrl: "https://kereyu.omera.tech",
    githubUrl: "https://github.com/yourusername/kereyu-hotel",
    projectType: "landing-page",
  },
  {
    title: "Ayu Hotel",
    description:
      "Modern boutique hotel website with elegant design, seamless booking experience, and integrated customer review system.",
    category: "Boutique Hotel Landing",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    gradient: "from-purple-500 via-pink-600 to-rose-700",
    darkGradient: "from-purple-600 via-pink-700 to-rose-800",
    stats: {
      users: "8K+",
      performance: "99.7%",
      rating: "4.7",
      growth: "120%",
    },
    image: "/images/ayu-hotel.jpg",
    results: [
      "Increased online bookings by 60%",
      "Improved user engagement by 40%",
      "Enhanced brand visibility by 55%",
    ],
    liveUrl: "https://ayuhotel.omera.tech",
    githubUrl: "https://github.com/yourusername/ayu-hotel",
    projectType: "landing-page",
  },
];
