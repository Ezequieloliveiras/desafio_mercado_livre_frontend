import styled from "styled-components"
import { Box, Grid2, Button } from '@mui/material'

// StyleForm.js

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content:center;
`;

const StyledGridContainer = styled(Grid2)`
  display: flex;
  flex-direction: ${({ theme }) => (theme?.breakpoints?.down('sm') ? 'column' : 'row')};
  align-items: center;
  gap: 16px;
`;

const StyledGridItem = styled(Grid2)`
  background-color: #fff;
  width: 200px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export {
    StyledBox,
    StyledGridContainer,
    StyledGridItem,
    StyledButton
}