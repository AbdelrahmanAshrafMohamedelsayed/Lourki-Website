import {
  Col,
  Container1,
  Containermain,
  Grid,
  Heading,
  Image,
  InnerText,
} from "./Protofolio.styled";
import logo1 from "../../Assets/portfolio-1.jpg";
import logo2 from "../../Assets/portfolio-2.jpg";
import logo3 from "../../Assets/portfolio-3.jpg";
const Protofolio = () => {
  return (
    <Containermain>
      <Container1>
        <Heading>
          <h2>Portfolio</h2>
          <p>If you do it right, it will last forever.</p>
        </Heading>
        <Grid>
          <Col>
            <Image>
              <img src={logo1} alt="hjhj" />
            </Image>
            <InnerText>
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </InnerText>
          </Col>
          <Col>
            <Image>
              <img src={logo2} alt="hjhj" />
            </Image>
            <InnerText>
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </InnerText>
          </Col>
          <Col>
            <Image>
              <img src={logo3} alt="hjhj" />
            </Image>
            <InnerText>
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </InnerText>
          </Col>
        </Grid>
      </Container1>
    </Containermain>
  );
};

export default Protofolio;
