import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import {Roboto} from 'next/font/google'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable:'--font-roboto'
  })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body >
        <Header />
        <>
        {children}
        </>
        <Footer/>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
