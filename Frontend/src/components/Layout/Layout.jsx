import Navbar from "../Homepage/navbar";
import Hero from "../Homepage/hero";
import About from "../Homepage/about";
import WhyUs from "../Homepage/whyus";
import Testimonials from "../Homepage/testomonials";
import Contact from "../Homepage/contact";
import Footer from "../Homepage/footer";


function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
