import {
  Col,
  Container1,
  Containermain,
  Grid,
  Heading,
  Image,
  InnerText,
} from "./About.styled";
import logo1 from "../../Assets/about.jpg";
const About = () => {
  return (
    <Containermain>
      <Container1>
        <Heading>
          <h2>About</h2>
          <p>If you do it right, it will last forever.</p>
        </Heading>
        <Grid>
          <Col>
            <Image>
              <img src={logo1} alt="kkk" />
            </Image>
          </Col>
          <Col>
            <InnerText>
              {/* <img src={logo1} alt="kkk" /> */}
              <div className="d1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  nemo neque voluptate tempora velit cum non, fuga vitae
                  architecto delectus sed maxime rerum impedit aliquam
                  obcaecati, aut excepturi iusto laudantium!
                </p>
              </div>
              {/* <div className="d3"></div> */}
              <div className="d2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, sapiente. Velit iure exercitationem dolores nesciunt
                  dolore. Eum officiis dolorum hic voluptate quaerat minima,
                  similique inventore esse, alias, sed quo officia?
                </p>
              </div>
            </InnerText>
          </Col>
        </Grid>
      </Container1>
    </Containermain>
  );
};

export default About;
