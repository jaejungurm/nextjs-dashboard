import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3804351843335725"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
