import { Landing1, Text } from "./Landing.styled";
// import LandingImage from "../../Assets/landing.jpg";
const Landing = () => {
  const imgUrl = require("../../Assets/landing.jpg"); //
  return (
    <Landing1 imgUrl={imgUrl}>
      <Text>
        <h1>Hello There</h1>
        <p>We are Leon - Super Creative & Minimal Agency Web Template</p>
      </Text>
    </Landing1>
  );
};

export default Landing;
