import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-16">
        <About />
      </div>
      <Footer></Footer>
    </main>
  );
}
