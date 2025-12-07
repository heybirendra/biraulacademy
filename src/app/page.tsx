import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Academics from "./components/Academics";
import About from "./components/About";
import TeacherSection from "./components/TeacherSection";
import Gallery from "./components/Gallery";
import NoticeBoard from "./components/NoticeBoard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Academics />
      <About />
      <TeacherSection />
      <Gallery />
      <NoticeBoard />
    </main>
  );
}
