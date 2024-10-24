import styled from "styled-components";
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'

const Container = styled(Box)`
&& {
    width: 100%;
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
`;

const StyledCard = styled(Card)`
&& {
    width: auto;
    height: auto;
    margin: 20px auto 0;
    padding: 20px;
     @media (max-width: 768px) {
      height: auto;
      width: 330px;
    }
}
`;

const ImageContainer = styled(Box)`
  && {
    width: 50%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%; // Atinge 100% da largura quando a tela for menor ou igual a 768px
    }
  }
`;


const ProductImage = styled(CardMedia)`
&& {
    margin-top:10px;
    max-height: auto; 
    max-width: 300px; 
    object-fit: contain; 
}
`;

const StyledCardContent = styled(CardContent)`
&& {
    flex: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding-Left: 40px;
    align-items: 'center';
}
`;

const StyledTypography = styled(Typography)`
&& {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;

}
`;

const StyledTypographyTitle = styled(Typography)`
&& {
  font-size: 1.2rem; 
  margin-bottom: 50px;
}
`;

const StyledTypographyPrice = styled(Typography)`
&& {
  margin-top: 29px; 
  margin-bottom:10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.25rem; 
}
`;

export {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    ProductImage,
    StyledCardContent,
    StyledTypography,
    StyledTypographyTitle,
    StyledTypographyPrice
}