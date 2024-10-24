import React from 'react'
import { Typography, Button, Grid2 } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
    StyledContainer,
    StyledCard,
    StyledCardMedia,
    StyledCardContent,
    StyledGrid
} from '../styles/StyleCardProducts'



const ProductGrid = ({ products }) => {
    const navigate = useNavigate()

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } })
    }

    return (
        <StyledContainer>
            <Typography variant="h4" align="center" gutterBottom>
                Produtos à Venda
            </Typography>

            <StyledGrid container spacing={2} alignItems="stretch">
                {products.map((product) => (
                    <Grid2 xs={12} sm={6} md={4} key={product.id} sx={{ width: '300px' }}>
                        <StyledCard onClick={() => handleProductClick(product)}>
                            <StyledCardMedia src={product.thumbnail} alt={product.title} />
                            <StyledCardContent>
                                <Typography variant="h5" component="div">
                                    {product.title}
                                </Typography>
                            </StyledCardContent>
                            <Typography variant="h5" component="div" textAlign="center" color="green">
                                R$ {product.price}
                            </Typography>

                            <Button size="small" sx={{ marginBottom: 1 }} onClick={() => handleProductClick(product)}>
                                Ver Produto
                            </Button>
                        </StyledCard>
                    </Grid2>
                ))}
            </StyledGrid>
        </StyledContainer>
    )
}

export default ProductGrid
