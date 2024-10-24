import styled from "styled-components";
import { Box, Typography } from '@mui/material'

const StyledBox = styled(Box)`
&& {
  mt: 2; 
  padding: '20px';
  borderTop: '1px solid rgba(0, 0, 0, 0.2)';
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
  StyledBox,
  StyledTypography,
}