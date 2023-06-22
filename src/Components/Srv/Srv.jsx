import { GiAirplaneArrival } from "react-icons/gi";
import { Containermain, Text } from "./Srv.styled";

const Srv = () => {
  return (
    <Containermain>
      <span>
        <GiAirplaneArrival />
      </span>
      <Text>
        <h3>Graphic Design</h3>
        <p>
          Graphic design is the process of visual communication and
          problem-solving using one or more of typography, photography and
          illustration.
        </p>
      </Text>
    </Containermain>
  );
};

export default Srv;
