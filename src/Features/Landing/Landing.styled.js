import styled from "styled-components";
export const Landing1 = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  height: calc(100vh - 77.2px);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 50px;
    font-weight: bold;
    color: #10cab7;
    margin-bottom: 5px;
  }
`;
export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 100%;
  width: 300px;
  p {
    line-height: 1.8;
    font-size: 17px;
  }
`;
