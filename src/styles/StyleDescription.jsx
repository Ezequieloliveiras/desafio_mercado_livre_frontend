import styled from "styled-components";
import { Box,Typography } from '@mui/material'

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

const StyledTypography = styled(Typography)`
&& {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
}
`;

export {
    Container,
    StyledBox,
    StyledTypography,
}