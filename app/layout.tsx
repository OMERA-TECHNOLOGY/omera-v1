import "@/styles/globals.css";
import NavBar from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import Providers from "@/app/provider";

export const metadata = {
  title: "OMERA Technology",
  description:
    "We build digital experiences that drive measurable growth for modern businesses.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/assets/logo.svg",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://omera.tech",
    title: "OMERA Technology",
    description:
      "Digital development solutions built for performance and reliability.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "OMERA Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMERA Technology",
    description: "Full-stack development built for business impact.",
    images: ["/assets/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
