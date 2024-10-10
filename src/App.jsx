import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="w-full dark:bg-dark">
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Banner />
        <AboutMe />
        <Services />
        <Projects />
        <Testimonials />
        <Design />
      </div>
      <Footer />
    </div>
  );
};

export default App;
