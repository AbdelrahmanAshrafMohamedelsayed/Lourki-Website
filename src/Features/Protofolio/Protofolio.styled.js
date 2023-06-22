import styled from "styled-components";
export const Containermain = styled.div`
  background-color: #f6f6f6;
  padding: 60px 0;
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
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 100px;
`;
export const Col = styled.div`
  background-color: #fff;
`;
export const Image = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
export const InnerText = styled.div`
  padding: 20px;
  max-width: 100%;
  h3 {
    font-size: 25px;
    font-weight: 800;
    color: #333;
    margin-bottom: 20px;
    max-width: 100%;
  }
  p {
    line-height: 1.6;
    color: #333;
    font-size: 15px;
    max-width: 100%;
  }
`;
