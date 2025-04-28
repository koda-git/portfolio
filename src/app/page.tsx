import Image from "next/image";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] select-none">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-16">
        <Intro />
        <div className="mt-96">
          <section id="projects" className="mt-16">
            <Projects />
          </section>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
