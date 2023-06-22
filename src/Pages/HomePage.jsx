import Attributes from "../Features/Attributes/Attributes";
import Landing from "../Features/Landing/Landing";
import NavBar from "../Features/NavBar/NavBar";
import Services from "../Features/Services/Services";
import Protofolio from "../Features/Protofolio/Protofolio";
import { Container } from "./HomePage.styled";
import About from "../Features/About/About";
import Contact from "../Features/Contact/Contact";
import Footer from "../Features/Footer/Fotter";
const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <Landing />
      {/* <Features />
       */}
      <Attributes />
      <Services />
      <Protofolio />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};

export default HomePage;
