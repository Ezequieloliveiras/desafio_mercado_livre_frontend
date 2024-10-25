import styled from "styled-components"
import { Box, Card,Typography } from '@mui/material'

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
    height: auto;
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
    max-width: 1200px;
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
margin-top:50px;
margin-bottom:20px;
  font-size: 1.2rem; 
}
`;

export {
  Container,
  StyledBox,
  StyledLink,
  StyledCard,
  ImageContainer,
  StyledTypographyTitle
}