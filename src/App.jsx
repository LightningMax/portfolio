import Hero from "./components/homepage/Hero";
import Projects from "./components/homepage/Showcase";
import NavBar from "./components/ui/NavBar";

export default function App() {
  return (
    <div className=" bg-gray-50">
      <header>
        <NavBar />
      </header>
        <Hero />
      <main className="">
        <Projects />
      </main>
    </div>
  );
}
