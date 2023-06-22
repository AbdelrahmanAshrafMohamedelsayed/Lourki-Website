import styled from "styled-components";
export const Containermain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  span {
    flex-basis: 60px;
    font-size: 35px;
    color: #10cab7;
  }
  h3 {
    font-size: 25px;
    font-weight: 800;
    color: #333;
    margin-bottom: 10px;
    max-width: 100%;
  }
  p {
    line-height: 1.8;
    color: #333;
    font-size: 17px;
    max-width: 100%;
  }
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Text = styled.div`
  flex: 1;
`;
