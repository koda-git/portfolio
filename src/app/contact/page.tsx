import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-16">
        <Contact />
      </div>
      <Footer></Footer>
    </main>
  );
}
