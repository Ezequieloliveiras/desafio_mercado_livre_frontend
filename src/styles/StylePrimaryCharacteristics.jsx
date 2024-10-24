import styled from "styled-components";
import { CardContent, Typography } from '@mui/material'


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

const StyledTypographyPrice = styled(Typography)`
&& {
  margin-top: 29px; 
  margin-bottom:10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.25rem; 
}
`;

export {
  StyledCardContent,
  StyledTypography,
  StyledTypographyPrice,
}