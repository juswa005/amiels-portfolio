import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amiel Josh Basug | Computer Engineering Intern",
    template: "%s | Amiel Josh Basug",
  },
  description: "Personal portfolio of Amiel Josh Basug, Computer Engineering student and software developer.",
  keywords: ["Amiel Josh Basug", "Portfolio", "Computer Engineering", "Software Developer", "Embedded Systems", "Linux"],
  authors: [{ name: "Amiel Josh Basug" }],
  creator: "Amiel Josh Basug",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amiels-portfolio.vercel.app",
    title: "Amiel Josh Basug | Computer Engineering Intern",
    description: "Personal portfolio of Amiel Josh Basug, Computer Engineering student and software developer.",
    siteName: "Amiel Josh Basug Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amiel Josh Basug | Computer Engineering Intern",
    description: "Personal portfolio of Amiel Josh Basug, Computer Engineering student and software developer.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amiel Josh Basug",
    "jobTitle": "Computer Engineering Intern",
    "url": "https://amiels-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/juswa005",
      "https://linkedin.com/in/amieljoshbasug"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-mono bg-background text-foreground selection:bg-foreground selection:text-background animate-in fade-in duration-700">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col md:flex-row w-full px-4 md:px-6 py-6 md:py-10 min-h-screen">
            <Sidebar />
            <div className="flex-grow flex flex-col min-w-0 md:px-12 lg:px-24">
              <main className="flex-grow flex flex-col w-full max-w-4xl mx-auto">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
