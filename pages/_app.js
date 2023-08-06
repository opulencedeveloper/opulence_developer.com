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
import Onboarding from '@/components/home/Onboarding';

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins max-w-[120rem] mx-auto`}>
      <Onboarding />
      <Layout> 
      
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </main>
  );
}
