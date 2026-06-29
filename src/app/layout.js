import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTopProgress from "@/components/common/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HARAI Innovations Pvt. Ltd.",
  description: "HARAI Innovations diagnostic and healthcare platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-heading 3xl:bg-linear-to-br 3xl:from-emerald-50/70 3xl:via-white 3xl:to-teal-50/50">
        <AppProvider>
          <Header />
          {children}
          <ScrollToTopProgress />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
