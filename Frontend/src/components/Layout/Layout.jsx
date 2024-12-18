import Navbar from "../Landingpage/navbar";
import Hero from "../Landingpage/hero";
import About from "../Landingpage/about";
import WhyUs from "../Landingpage/whyus";
import Testimonials from "../Landingpage/testomonials";
import Contact from "../Landingpage/contact";
import Footer from "../Landingpage/footer";


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
