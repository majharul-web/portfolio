import { Blog } from "@/components/Blog";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/Skills";
import { homeSkillCategories } from "@/data/content";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-6xl lg:flex">
      <Sidebar />
      <main className="relative z-10 px-6 pb-16 sm:px-12 lg:w-[60%] lg:py-12 lg:pl-10 lg:pr-4">
        <Skills categories={homeSkillCategories} />
        <Experience />
        <Projects />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
