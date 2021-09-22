import styled from "styled-components";
import Background from "../../assets/background.jpg";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 99vw;
    height: 35vh;

  }

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;


export const Image = styled.div`
  @media (min-width: 1200px) {
    height: 17%;
    width: 91vw;
    background-image: url(${Background});
    background-size: contain;
    position: absolute;
    filter: blur(2px);
    opacity: 0.8;
  }
`;
