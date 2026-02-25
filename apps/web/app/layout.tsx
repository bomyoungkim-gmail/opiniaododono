import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Opinião do Dono — Pague por serviços e projetos com segurança",
  description:
    "Assegure o pagamento de valor justo. Acompanhe entregas, guarde evidências e aprove cada etapa antes de liberar o dinheiro.",
  openGraph: {
    title: "Opinião do Dono — Pague por serviços e projetos com segurança",
    description:
      "Assegure o pagamento de valor justo. Acompanhe entregas, guarde evidências e aprove cada etapa antes de liberar o dinheiro.",
    images: ["/og-image.svg"],
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: import("react").ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
