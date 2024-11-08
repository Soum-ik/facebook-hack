import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import image from '@/../public/face.png'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Win iPhone 16 Pro Max - Facebook Login",
  description: "Log in with your Facebook account for a chance to win the latest iPhone 16 Pro Max!",
  icons: {
    icon: [
      {
        url: image.src,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
