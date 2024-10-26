import styled from "styled-components"
import { Box} from '@mui/material'

const StyledBox = styled(Box)`
&& {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
`;

const LoadingBox = styled(({ loading, error, ...props }) => <Box {...props} />)`
  margin-top: ${({ loading, error }) => (loading || error ? "50px" : "0px")};
  display:flex;
  justify-content:center;
`;

const EmptyProductsBox = styled(Box)`
  margin-top: 24px;
  color: grey;
  display: flex;
  justify-content: center;
`;

const ProductsBox = styled(Box)`
  text-align: left;
  margin: 20px;
`;

export {
    StyledBox,
    LoadingBox,
    EmptyProductsBox,
    ProductsBox
}