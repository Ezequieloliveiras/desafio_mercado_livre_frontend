import styled from "styled-components"
import { Box, Card,Typography } from '@mui/material'
import Carousel from "react-material-ui-carousel";

const Container = styled(Box)`
&& {
    width: auto;
    height: auto;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}
`;

const StyledBox = styled(Box)`
&& {
    display: flex;
    height: autopx;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
}
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: grey;
  width:auto;
`;

const StyledCard = styled(Card)`
&& {
    width: 1200px;
    height: auto;
    margin: 20px auto 0;
    padding: 20px;
     @media (max-width: 768px) {
      height: auto;
      width: 300px;
       margin: 10px 0px;
    }
}
`;

const StyledBoxContent = styled(Box)`
&& {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
   
}
`;

const StyledCarousel = styled(Carousel)`
&& {
  width: 100%,
  height: 550px,
  @media (max-width: 768px) {
      height: auto;
    }
}
`;


const ImageContainer = styled(Box)`
  && {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%; // Atinge 100% da largura quando a tela for menor ou igual a 768px
    }
  }
`;

const StyledTypographyTitle = styled(Typography)`
&& {

  margin: auto 0;
  font-size: 1.2rem; 
}
`;

export {
  Container,
  StyledBox,
  StyledLink,
  StyledCard,
  StyledBoxContent,
  StyledCarousel,
  ImageContainer,
  StyledTypographyTitle
}