import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import AboutMe from "./components/layout/Aboutme";
import Projects from "./components/layout/Projects";
import ContactMe from "./components/layout/ContactMe";
import Skills from "./components/layout/Skills";



function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </main>
      </div>
    </>
  );
}

export default App;
