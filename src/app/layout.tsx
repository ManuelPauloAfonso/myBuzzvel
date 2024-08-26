import Head from "next/head";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GradientFull from "@/components/gradientFull";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "My Project Portfolio",
  description:
    "Showcase your projects with our professional portfolio website. Highlight your skills, experience, and creativity with a stunning online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="portfolio, projects, web development, design, showcase, creativity, skills"
        />
        <meta name="author" content="Manuel Afonso" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="../assets/Brand-logo.svg" />
        <meta property="og:url" content="https://manuelafonso.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="../assets/Brand-logo.svg" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        <link rel="icon" href="../assets/Brand-logo.svg" type="image/svg+xml" />
      </Head>
      <body
        className={inter.className}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <GradientFull />
        {children}
      </body>
    </html>
  );
}
