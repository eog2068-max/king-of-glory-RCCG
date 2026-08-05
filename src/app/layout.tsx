import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { PWAProvider } from "@/components/pwa/pwa-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#28166F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RCCG King of Glory",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_GAF_BASE_URL || "https://www.rccgkingofglory.org"),
  title: {
    default: "RCCG King of Glory Parish, Zonal Headquarters | The Redeemed Christian Church of God",
    template: "%s | RCCG King of Glory",
  },
  description:
    "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters, Abuja - A place of worship, fellowship, and spiritual growth. Jesus Christ the same yesterday, and today, and forever. Heb. 13:8",
  keywords: [
    "The Redeemed Christian Church of God",
    "RCCG",
    "RCCG King of Glory",
    "King of Glory Parish, Zonal Headquarters",
    "Christian church Nigeria",
    "Worship",
    "Prayer",
    "Sermons",
    "Abuja church",
  ],
  authors: [{ name: "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters" }],
  creator: "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters",
  publisher: "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "RCCG King of Glory Parish, Zonal Headquarters | The Redeemed Christian Church of God",
    description:
      "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters, Abuja - A place of worship, fellowship, and spiritual growth.",
    siteName: "RCCG King of Glory Parish, Zonal Headquarters",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "RCCG King of Glory",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RCCG King of Glory Parish, Zonal Headquarters",
    description:
      "The Redeemed Christian Church of God, King of Glory Parish, Zonal Headquarters, Abuja - Worship, fellowship, and spiritual growth.",
    images: ["/icons/icon-192x192.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RCCG King of Glory" />
        {/* Permanently disable browser scroll restoration BEFORE React hydrates.
            This must run synchronously in <head> so the browser never restores
            the previous scroll position when navigating between social features. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } try { window.scrollTo(0, 0); } catch (e) {}",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <PWAProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PWAProvider>
        <Toaster />
      </body>
    </html>
  );
}