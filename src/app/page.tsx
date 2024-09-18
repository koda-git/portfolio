import Image from "next/image";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mx-auto px-12 py-4">
        <Intro/>
        <div className="mt-15">
          <Projects/>
        </div>
      </div>
      <Footer></Footer>
    </main >
  );
}
