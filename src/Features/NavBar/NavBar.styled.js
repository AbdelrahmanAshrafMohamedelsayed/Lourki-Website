import styled from "styled-components";
export const Container1 = styled.div`
  padding: 20px;
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
export const Logo = styled.img`
  width: 60px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Links = styled.div`
  position: relative;
  span {
    font-size: 30px;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f6f6f6;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* display: none; */
    display: ${({ open }) => (open ? "block" : "none")};
    min-width: 200px;
    z-index: 1;
  }
  ul::before {
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #f6f6f6 transparent;
    position: absolute;
    right: 5px;
    top: -20px;
  }
  ul li a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 15px;
    transition: 0.3s;
    border-bottom: 1px solid #e4e4e4;
  }
  ul li:last-child a {
    border-bottom: none;
  }
  ul li a:hover {
    background-color: #e4e4e4;
    padding-left: 30px;
  }
`;
