import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishna",
  description:
    "Hi, I am Krishna, a UI/UX designer based in Karur, India. This is my portfolio website. Here I showcase my projects and skills. Confident yet humble, I embrace growth while supporting and uplifting those around me. With sharp eyes and a warm smile, I take responsibility for my actions and listen deeply to understand others.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
