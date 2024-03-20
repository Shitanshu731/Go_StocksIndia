import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
      <Header />
      <Hero />
   </div>
  );
}
