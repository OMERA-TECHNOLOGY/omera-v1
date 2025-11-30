import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import Providers from "@/app/provider";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  metadataBase: new URL("https://omera.tech"),
  title: {
    default: "OMERA Technology | Enterprise Web & Mobile Development",
    template: "%s | OMERA Technology",
  },
  description:
    "We build custom software solutions and scalable digital platforms that drive real business results. Expert web development, mobile apps, cloud solutions, and AI/ML integration.",
  keywords: [
    "web development",
    "mobile app development",
    "cloud solutions",
    "AI/ML",
    "React",
    "Node.js",
    "AWS",
    "enterprise software",
    "OMERA Technology",
  ],
  authors: [{ name: "OMERA Technology" }],
  creator: "OMERA Technology",
  publisher: "OMERA Technology",
  alternates: {
    canonical: "https://omera.tech",
  },
  icons: {
    icon: "/assets/logo.svg",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omera.tech",
    siteName: "OMERA Technology",
    title: "OMERA Technology | Enterprise Web & Mobile Development",
    description:
      "Custom software solutions and scalable digital platforms built for performance and reliability.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "OMERA Technology - Tech Solutions That Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMERA Technology | Enterprise Development",
    description: "Full-stack development built for business impact.",
    images: ["/assets/twitter-image.png"],
    creator: "@omeratech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9FAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OMERA Technology",
    url: "https://omera.tech",
    logo: "https://omera.tech/assets/logo.svg",
    description:
      "Custom software solutions and scalable digital platforms that drive real business results.",
    sameAs: [
      "https://twitter.com/omeratech",
      "https://linkedin.com/company/omera-technology",
      "https://github.com/omera-tech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@omera.tech",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
