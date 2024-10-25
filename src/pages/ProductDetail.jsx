import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    StyledTypographyTitle
} from '../styles/StyleProductDetails'

import { Paper, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import PrimaryCharacteristics from '../components/ProductDetailsComponents/PrimaryCharacteristics'
import SecondCharacteristics from '../components/ProductDetailsComponents/SecondCharacteristics'
import Description from '../components/ProductDetailsComponents/Description'

function Item({ image, title }) {
    return (
        <Paper elevation={3} style={{ textAlign: 'center', height: 'auto'}}>
            <img
                src={image}
                alt={title}
                style={{
                    width: '100%',           // Ajusta a largura da imagem ao container
                    height: '400px',        // Mantém a proporção original da imagem
                    maxHeight: '80vh',      // Altura máxima de 80% da viewport
                    objectFit: 'contain',   // Garante que a imagem seja ajustada sem cortar
                    maxWidth: '100%',       // Evita que a imagem ultrapasse a largura da tela
                }}
            />
        </Paper>
    )
}

function ProductDetail() {
    const location = useLocation()
    const { product } = location.state || {}
    const [base, setBase] = useState({})

    const imagesProduct = base?.pictures || []

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                if (product?.id) {
                    const response = await axios.get(`https://api.mercadolibre.com/items/${product.id}`)
                    setBase(response.data)
                }
            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            } 
        }

        fetchDescription()
    }, [product])

    if (!product) {
        return <div>Produto não encontrado.</div> 
    }

    return (
        <Container>
            <StyledLink href="/">Página Inicial</StyledLink>
            <StyledCard>
                <StyledBox>
                    <ImageContainer>
                        <StyledTypographyTitle>{base.title || 'Título não disponível'}</StyledTypographyTitle>
                        <Box sx={{ position: 'relative', width: '100%', height: 'auto', marginBottom:'50px'}}>
                            <Carousel
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                indicators={true} // Exibe os indicadores
                                navButtonsAlwaysVisible={false}
                                autoPlay={false} // Desativa reprodução automática
                                indicatorContainerProps={{
                                    sx: {
                                        position: 'absolute',
                                        bottom: '10px', 
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Centraliza os indicadores
                                        zIndex: 10, // fica em cima da imagem
                                    }
                                }}
                            >
                                {imagesProduct.map((img, index) => (
                                    <Item key={index} image={img.url} title={base.title || 'Imagem do Produto'} />
                                ))}
                            </Carousel>
                        </Box>
                    </ImageContainer>
                    <PrimaryCharacteristics />
                </StyledBox>
                <Description />
                <SecondCharacteristics />
            </StyledCard>
        </Container>
    )
}

export default ProductDetail
