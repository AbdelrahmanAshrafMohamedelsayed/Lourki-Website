import styled from "styled-components";
export const Containermain = styled.div`
  padding: 50px 40px;
  background-color: #2c4755;
  text-align: center;
  margin: auto;
  color: #fff;
  position: relative;
  font-size: 20px;
  span {
    color: #10cab7;
    font-weight: 800;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    /* transform: translateX(-50%); */
    transform: translate(-50%, -50%);
  }
`;
