import { GiBirdTwitter, GiInterstellarPath, GiNunFace } from "react-icons/gi";
import { Container1, Containermain, Heading, Txt } from "./Contact.styled";

const Contact = () => {
  return (
    <Containermain>
      <Container1>
        <Heading>
          <h2>Contact</h2>
          <p>If you do it right, it will last forever.</p>
        </Heading>
        <Txt>
          <p className="a1">Feel free to drop us a line at:</p>
          <p className="a2">
            <a href="mailto:body1562001@gmail.com">body1562001@gmail.com</a>
          </p>
          <div className="a3">
            <div className="text">Find Us On Social Networks :</div>
            <div className="icons">
              <span>
                <GiNunFace />{" "}
              </span>
              <span>
                <GiBirdTwitter />{" "}
              </span>
              <span>
                <GiInterstellarPath />{" "}
              </span>
            </div>
          </div>
        </Txt>
      </Container1>
    </Containermain>
  );
};

export default Contact;
