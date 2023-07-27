import { Poppins } from 'next/font/google';
import Image from "next/image";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

import "@/styles/globals.css";
import Layout from '@/components/layouts/Layout';
import Footer from '@/components/layouts/Footer';

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins max-w-[120rem] mx-auto`}>
      <Layout>
      <div className="absolute top-0 right-0 left-0 bottom-0 z-0 h-screen w-full"> <Image
            src="/images/opulence-developer-hero-image.jpg"
            alt="Newspaper"
            className="h-full w-full object-cover opacity-20 "
            priority
            loading="eager"
            width={600}
            height={400}
          /> </div>
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </main>
  );
}
