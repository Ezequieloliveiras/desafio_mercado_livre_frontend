import React, { useEffect, useState } from 'react'
import { Typography, Button, Grid2 } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
    StyledContainer,
    StyledCard,
    StyledCardMedia,
    StyledCardContent,
    StyledGrid
} from '../styles/StyleCardProducts'
import axios from 'axios'

const ProductGrid = ({ products }) => {
    const [base, setBase] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const MLBS = await Promise.all(
                    products.map(async (product) => {
                        const response = await axios.get(`https://api.mercadolibre.com/items/${product.id}`)
                        return response.data
                    })
                )
                setBase(MLBS) // Atualizando o estado com os dados dos produtos
            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            }
        }

        fetchImages()
    }, [products])

    const navigate = useNavigate()

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } })
    }

    return (
        <StyledContainer>
            <StyledGrid
                container
                spacing={2}
                alignItems="stretch"
                sx={{
                    backgroundColor: products.length > 0 ? 'rgba(0, 0, 0, 0.1)' : '',
                    padding: '10px 0px',
                    width: '100%'
                }}
            >
                {products.map((product, index) => (

                    <Grid2 xs={12} sm={6} md={4} key={product.id} width={300}  >
                        <StyledCard onClick={() => handleProductClick(product)} >
                            <StyledCardMedia
                                component="img"
                                src={base[index]?.pictures?.[0]?.url || product.thumbnail}
                                alt={product.title}

                            />
                            <StyledCardContent>
                                <Typography variant="h6" component="div">
                                    {product.title}
                                </Typography>
                            </StyledCardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                textAlign="center"
                                color="green"
                            >
                                R$ {product.price}
                            </Typography>
                            <Button
                                size="small"
                                sx={{ marginBottom: 1 }}
                                onClick={() => handleProductClick(product)}
                            >
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
