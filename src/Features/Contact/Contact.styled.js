import styled from "styled-components";
export const Containermain = styled.div`
  padding: 60px 0;
  background-color: #f6f6f6;
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
export const Txt = styled.div`
  margin: 60px 0;
  text-align: center;
  .a1 {
    font-size: 2rem;
    color: #2c4755;
    font-weight: 800;
    margin-bottom: 10px;
  }
  .a2 a {
    font-size: 2rem;
    color: #10cab7;
    font-weight: 800;
    text-decoration: none;
  }
  .a2 {
    margin-bottom: 10px;
  }
  .a3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-left: 10px;
    font-size: 1rem;
    color: #2c4755;
  }
  @media (max-width: 768px) {
    .a1,
    .a2 a,
    .a3 {
      font-size: 1.5rem !important;
    }
  }
`;
