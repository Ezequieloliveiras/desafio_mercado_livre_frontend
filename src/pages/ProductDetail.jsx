import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    StyledCarousel,
    ImageContainer,
    StyledTypographyTitle,
    StyledBoxContent
} from '../styles/StyleProductDetail'

import { fetchProductDetails } from '../api/api'


import { Paper } from '@mui/material'

import PrimaryCharacteristics from '../components/ProductDetailsComponents/PrimaryCharacteristics'
import SecondCharacteristics from '../components/ProductDetailsComponents/SecondCharacteristics'
import Description from '../components/ProductDetailsComponents/Description'

function Item({ image, title }) {
    return (
        <Paper elevation={3} style={{ textAlign: 'center', height: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
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
                    const data = await fetchProductDetails(product.id) // Chama a função de busca
                    setBase(data)
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
                        <div style={{margin:'20px 0px 40px 0px'}}>
                        <StyledTypographyTitle>{base.title || 'Título não disponível'}</StyledTypographyTitle>

                        </div>
                        <StyledBoxContent>
                            <StyledCarousel
                                indicators={true}
                                navButtonsAlwaysVisible={false}
                                autoPlay={false}
                                interval={0}
                                animation="none" 
                                indicatorContainerProps={{
                                    sx: {
                                        position: 'absolute',
                                        bottom: '10px', 
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Centraliza os indicadores
                                        zIndex: 10,
                                    }
                                }}
                            >
                                {imagesProduct.map((img, index) => (
                                    <Item key={index} image={img.url} title={base.title || 'Imagem do Produto'} />
                                ))}
                            </StyledCarousel>
                        </StyledBoxContent>
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
