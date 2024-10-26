import styled from "styled-components";
import { Box, Typography } from '@mui/material'

const StyledBox = styled(Box)`
&& {
  mt: 2; 
  padding: 20px;
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

const ExpandableTypography = styled(Typography)`
  margin-top: 16px; /* Equivalent to mt: 2 */
  color: #3483fa;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #1c54b2;
  }
`;

export {
  StyledBox,
  StyledTypography,
  ExpandableTypography
}