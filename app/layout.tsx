import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#247a3b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eleverve.green"),
  title: "Eleverve Green — Any Renewable Energy, Made Firm.",
  description:
    "Eleverve Green owns and operates renewable assets in India, delivering firm power through utility-scale PPAs and Energy-as-a-Service across solar, wind, hydro and storage — an owner-operator, not a build-and-flip developer.",
  keywords: [
    "Renewable Energy India",
    "Utility PPAs",
    "Energy-as-a-Service",
    "FDRE",
    "Round The Clock RE",
    "BESS Battery Energy Storage",
    "Solar Power Operating Platform",
    "Open Access Solar India",
  ],
  authors: [{ name: "Eleverve Green Private Limited" }],
  creator: "Eleverve Green Private Limited",
  publisher: "Eleverve Green Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eleverve.green",
    title: "Eleverve Green — Any Renewable Energy, Made Firm.",
    description:
      "Utility-scale PPA and Energy-as-a-Service renewable platform for India's industrial, institutional and utility buyers.",
    siteName: "Eleverve Green",
    images: [
      {
        url: "/images/solar-substation.jpg",
        width: 1200,
        height: 630,
        alt: "Eleverve Green Renewable Power Operating Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleverve Green — Any Renewable Energy, Made Firm.",
    description:
      "Utility-scale PPA and Energy-as-a-Service renewable platform for India's industrial, institutional and utility buyers.",
    images: ["/images/solar-substation.jpg"],
  },
  icons: {
    icon: "/logos/eleverve-logo-transparent.svg",
    shortcut: "/logos/eleverve-logo-transparent.svg",
    apple: "/logos/eleverve-logo-white-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans selection:bg-green selection:text-white" data-theme="ivory">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
