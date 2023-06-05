import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-sky-900 to-gray-900 h-screen w-full">
      <Navbar />
      <Hero />
    </main>
  );
}
