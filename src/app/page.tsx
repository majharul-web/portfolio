import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-6xl lg:flex">
      <Sidebar />
      <main className="relative z-10 px-6 pb-16 sm:px-12 lg:w-[60%] lg:py-12 lg:pl-12 lg:pr-12 xl:pr-24">
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
