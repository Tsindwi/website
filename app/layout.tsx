import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: {
    default: "Tsidwi - Walk the Talk | African Tech Innovation",
    template: "%s | Tsidwi - African Tech Innovation",
  },
  description:
    "Tsidwi is disrupting traditional systems across Africa through innovative technology solutions. Starting in Malawi, expanding across the continent to bring Africa to technological parity with the world.",
  keywords: [
    "African tech",
    "Malawi technology",
    "innovation",
    "digital transformation",
    "Tsidwi",
    "government systems",
    "NGO technology",
    "private sector solutions",
    "Roy Chanunkha",
    "African startups",
  ],
  authors: [{ name: "Tsidwi Team" }],
  creator: "Tsidwi",
  publisher: "Tsidwi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tsidwi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tsidwi - Walk the Talk | African Tech Innovation",
    description: "Disrupting traditional systems across Africa through innovative technology solutions.",
    url: "https://tsidwi.com",
    siteName: "Tsidwi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsidwi - African Tech Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsidwi - Walk the Talk | African Tech Innovation",
    description: "Disrupting traditional systems across Africa through innovative technology solutions.",
    images: ["/og-image.jpg"],
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
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#10b981" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/tsidwi-logo.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
