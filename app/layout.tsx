import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export const metadata: Metadata = {
  title: "3xx - Triple X",
  description: "Triple X offers premium mystery products and packs filled with unique and exclusive items. \
    Discover creative surprises, special experiences, classes, accessories, and luxury pieces all in one box.",
  keywords: "mystery box, premium surprise box, luxury mystery pack, exclusive items, creative gifts, \
    surprise package, experience boxes, Morocco mystery box, exclusive bundles, Triple X, mystery products",
  openGraph: {
    title: "Triple X — Premium Mystery Products & Packs and Exclusive Surprises.",
    description: "Unlock exclusive surprises with Triple X premium mystery products and packs.",
    url: "https://3xx.ma",
    siteName: "3xx",
    images: [
      {
        url: "https://3xx.ma/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3xx"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple X — Premium Mystery Products & Packs and Exclusive Surprises.",
    description: "Unlock exclusive surprises with Triple X premium mystery products and packs.",
    images: ["https://3xx.ma/og-image.jpg"]
  },
  authors: [{ name: "3xx", url: "https://3xx.ma" }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased text-[14px]`}>
        {children}
      </body>
    </html>
  )
}