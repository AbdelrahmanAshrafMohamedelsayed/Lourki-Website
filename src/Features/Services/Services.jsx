import Srv from "../../Components/Srv/Srv";
import {
  Container,
  Containermain,
  Grid,
  Heading,
  Col,
  Image,
} from "./Services.styled";
import logo from "../../Assets/services.jpg";
const Services = () => {
  return (
    <Containermain>
      <Container>
        <Heading>
          <h2>Services</h2>
          <p>Don't be busy, be productive</p>
        </Heading>
        <Grid>
          <Col>
            <Srv />
            <Srv />
          </Col>
          <Col>
            <Srv />
            <Srv />
          </Col>
          <Col>
            <Image>
              <img src={logo} alt="hjhj" />
            </Image>
          </Col>
        </Grid>
      </Container>
    </Containermain>
  );
};

export default Services;
