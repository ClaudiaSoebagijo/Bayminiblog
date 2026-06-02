import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem, Solution } from "./components/ProblemSolution";
import { Process } from "./components/Process";
import { Demo } from "./components/Demo";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Demo />
      <Team />
      <Footer />
    </div>
  );
}
