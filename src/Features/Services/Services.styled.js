import styled from "styled-components";
export const Containermain = styled.div`
  padding: 60px 0;
`;
export const Container = styled.div`
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
export const Heading = styled.div`
  text-align: center;
  h2 {
    font-size: 100px;
    font-weight: 800;
    color: #ebeced;
    margin: 0;
    padding: 0;
    letter-spacing: -3px;
  }
  /* Small */
  @media (max-width: 768px) {
    h2 {
      font-size: 80px;
    }
  }
  p {
    margin-top: -30px;
    font-size: 20px;
    color: #333;
    line-height: 1.8;
  }
`;
export const Grid = styled.div`
  display: grid;
  /* padding: 30px; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-top: 100px;
`;
export const Col = styled.div``;
export const Image = styled.div`
  position: relative;
  img {
    width: 260px;
  }
  ::before {
    background-color: #2c4755;
    content: "";
    width: 100px;
    height: calc(100% + 100px);
    top: -50px;
    position: absolute;
    right: 50px;
    z-index: -1;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
