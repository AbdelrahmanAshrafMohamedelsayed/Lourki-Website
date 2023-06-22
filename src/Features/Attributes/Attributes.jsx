import { GiAirBalloon, GiAirMan } from "react-icons/gi";
import { Container, Container1, Feet, Flex, Grid } from "./Attributes.styled";
// import { BiSolidLogOut } from "react-icons/bi";
import { BiAbacus } from "react-icons/bi";

const Attributes = () => {
  const feets = [
    {
      icon: <BiAbacus />,
      title: "We Will Do All The Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
    },
    {
      icon: <GiAirBalloon />,
      title: "We Will Do All The Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
    },
    {
      icon: <GiAirMan />,
      title: "We Will Do All The Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
    },
  ];
  return (
    <Container>
      <Container1>
        <Grid>
          {feets.map((item, index) => (
            <Feet key={index}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Feet>
          ))}
        </Grid>
      </Container1>
    </Container>
  );
};

export default Attributes;
