import styled from "styled-components";
export const Container = styled.div`
  padding: 60px 0;
  background-color: #f6f6f6;
`;
export const Container1 = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  /* Small */
  @media (min-width: 768px) {
    width: 750px;
  }
  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }
  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-top: 100px;
`;
export const Feet = styled.div`
  padding: 20px 10px;
  text-align: center;
  /* flex: 1; */
  flex-basis: 300px;
  h3 {
    font-size: 25px;
    font-weight: 800;
    color: #333;
    /* margin-bottom: 10px; */
    margin: 30px 0;
  }
  p {
    font-size: 17px;
    line-height: 1.8;
    color: #333;
  }
  span {
    font-size: 60px;
    color: #10cab7;
  }
`;
