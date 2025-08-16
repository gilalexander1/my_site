import type { Metadata } from "next";
import "./globals.css";
import { getThemeAttrs } from "../lib/theme";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Gil Alexander — Portfolio",
  description: "Licensed Adjuster · Data Analytics · MBA Candidate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...getThemeAttrs()}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
