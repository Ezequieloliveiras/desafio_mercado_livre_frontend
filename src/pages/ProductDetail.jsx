import { useLocation } from 'react-router-dom'
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    ProductImage,
    StyledCardContent,
    StyledTypography,
    StyledTypographyTitle,
    StyledTypographyPrice,
} from '../styles/StyleProductDetails'
import { Collapse, Button, Box, Typography } from '@mui/material'  // Importar Collapse, Button, e Box do Material UI

import { useEffect, useState } from 'react'
import axios from 'axios'

// componente que renderiza o produto em uma página única e com link de ver no meli
function ProductDetail() {
    const location = useLocation() // de onde recebe o products
    const { product } = location.state || {}
    const brandAttribute = product?.attributes?.find((attr) => attr.id === 'BRAND')
    const brandAttributeModel = product?.attributes?.find((attr) => attr.id === 'MODEL')
    const [expanded, setExpanded] = useState(false) // Controla se a descrição está expandida


    const [base, setBase] = useState('')
    const [description, setDescription] = useState('')

    const imageProduct = base?.data?.pictures[0].url
    console.log('Base de Dados:', imageProduct) // Acessa o objeto completo


    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const baseUrl = await axios.get(`https://api.mercadolibre.com/items/${product.id}`)

                const resultDescritpion = await axios.get(`https://api.mercadolibre.com/items/${product.id}/description`)

                setDescription(resultDescritpion.data.plain_text)
                setBase(baseUrl)

            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            }
        }

        if (product?.id) {
            fetchDescription()
        }
    }, [product])

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <Container>
            <StyledLink href="/">Página Inicial</StyledLink>
            <StyledCard>
                <StyledBox>
                    <ImageContainer>
                        <StyledTypographyTitle>
                            {product.title}
                        </StyledTypographyTitle>
                        <ProductImage
                            component="img"
                            image={imageProduct}
                            alt={product.title}
                        />
                    </ImageContainer>
                    <StyledCardContent>
                        <StyledTypographyPrice>
                            Preço: R$ {product.price.toFixed(2)}
                        </StyledTypographyPrice>
                        <StyledTypography>
                            Condição: {product.condition === 'used' ? 'Usado' : '' || product.condition === 'new' ? 'Novo' : ''}
                        </StyledTypography>
                        {brandAttribute && (
                            <StyledTypography>
                                Marca: {brandAttribute.value_name}
                            </StyledTypography>
                        )}
                        {brandAttributeModel && (
                            <StyledTypography>
                                Modelo: {brandAttributeModel.value_name}
                            </StyledTypography>
                        )}

                        <a href={product.permalink}
                            target="_blank"
                            rel="noopener noreferrer">
                            Ver produto no Mercado Livre
                        </a>

                    </StyledCardContent>
                </StyledBox>

                <hr style={{ marginTop: "60px" }} />

                <Box sx={{ mt: 2 }}>
                    <Typography variant='h6' marginBottom="10px">Descrição</Typography>


                    <Collapse in={expanded} collapsedSize={60}>
                        <StyledTypography>
                            {description}
                        </StyledTypography>
                    </Collapse>
                    <Button onClick={toggleExpand} sx={{ mt: 2 }}>
                        {expanded ? 'Ver menos' : 'Ver mais'}
                    </Button>
                </Box>
            </StyledCard>
        </Container>
    )
}

export default ProductDetail
