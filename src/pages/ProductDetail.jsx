import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    ProductImage,
    StyledTypographyTitle,
} from '../styles/StyleProductDetails'

import PrimaryCharacteristics from './PrimaryCharacteristics'
import SecondCharacteristics from './SecondCharacteristics'
import Description from './Description'

function ProductDetail() {
    const location = useLocation()
    const { product } = location.state || {}
    console.log('produtos', product)
    const [base, setBase] = useState('')

    const imageProduct = base?.pictures?.[0]?.url // Verificação de segurança para evitar erros de acesso

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const baseUrl = await axios.get(`https://api.mercadolibre.com/items/${product.id}`)
                setBase(baseUrl.data)

            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            }
        }

        if (product?.id) {
            fetchDescription()
        }
    }, [product])

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
                        <PrimaryCharacteristics />
                </StyledBox>
                <Description />
                <SecondCharacteristics />
            </StyledCard>
        </Container>
    )
}

export default ProductDetail
