import { Typography, CircularProgress } from '@mui/material'
import {
    StyledBox,
    LoadingBox,
    EmptyProductsBox,
    ProductsBox
} from '../../styles/StyleInfoTitle'

function InfoTitle({ loading, error, products }) {
    return (
        <StyledBox>

            <LoadingBox loading={loading} error={error}>
                {loading && <CircularProgress />}
                {error && (
                    <Typography color="error">
                        {error}
                    </Typography>
                )}
            </LoadingBox>

            <EmptyProductsBox>
                {products.length === 0 && !loading && (
                    <Typography variant="body1">
                        Pesquise por um produto.
                    </Typography>
                )}
            </EmptyProductsBox>

            <ProductsBox>
                {products.length > 0 && (
                    <Typography variant="body1">
                        Produtos Encontrados
                    </Typography>
                )}
            </ProductsBox>

        </StyledBox>
    )
}

export default InfoTitle
