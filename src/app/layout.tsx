import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABBY Solutions — Forecasting Growth, Designing Success",
  description:
    "Premier FP&A advisory, budgeting, forecasting, and financial management for SMBs, startups, and nonprofits. 30+ years of corporate finance expertise.",
  keywords: [
    "FP&A advisory",
    "financial planning and analysis",
    "budgeting and forecasting",
    "financial consulting",
    "CFO services",
    "financial statements management",
    "small business finance",
    "startup finance",
    "nonprofit finance",
  ],
  openGraph: {
    title: "ABBY Solutions — Forecasting Growth, Designing Success",
    description:
      "Premier FP&A advisory and financial consulting for SMBs, startups, and nonprofits.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
