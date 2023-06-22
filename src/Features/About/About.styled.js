import styled from "styled-components";
export const Containermain = styled.div`
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
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: 1.5fr 2fr;
  /* grid-gap: 30px; */
  margin-top: 100px;
  /* Medium */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const Col = styled.div``;
export const Image = styled.div`
  position: relative;
  width: 250px;
  height: 375px;
  img {
    width: 100%;
    position: relative;
  }
  img::before {
    content: "";
    position: absolute;
    background-color: #000;
    width: 100px;
    height: calc(100% + 40px);
    top: -20px;
    left: -30px;
  }
  ::before {
    content: "";
    position: absolute;
    background-color: rgb(235, 236, 237);
    width: 60px;
    height: calc(100% + 40px);
    top: -20px;
    z-index: -1;
    left: -30px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 60px;
    height: calc(100% - 92px);
    top: -21px;
    z-index: -1;
    right: -100px;
    border-left: 80px solid rgb(16, 202, 183);
    border-bottom: 77px solid rgb(16, 202, 183);
  }
  @media (max-width: 992px) {
    ::before,
    ::after {
      display: none;
    }
  }
`;
export const InnerText = styled.div`
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  .d1 p {
    /* font-size: 15px; */
    font-weight: bold;
    line-height: 2;
    max-width: 100%;
    max-height: 100%;
  }
  .d1 {
    margin-bottom: 50px;
    position: relative;
    max-width: 100%;
    max-height: 100%;
  }
  .d1::before {
    content: "";
    position: absolute;
    height: 1px;
    background-color: #000;
    width: 50%;
    bottom: -30px;
    left: 0;
  }
  @media (max-width: 992px) {
    .d1::before {
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
  .d2 p {
    /* font-size: 15px; */
    /* font-weight: bold; */
    line-height: 2;
    color: #777;
    max-width: 100%;
    max-height: 100%;
  }
`;
