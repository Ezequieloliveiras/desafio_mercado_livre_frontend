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
import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import PrimaryCharacteristics from '../components/PrimaryCharacteristics'
import SecondCharacteristics from '../components/SecondCharacteristics'
import Description from '../components/Description'

function Item({ image, title }) {
    return (
        <Paper elevation={3} style={{ textAlign: 'center', height: 'auto', minHeight: '300px' }}>
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
    const [loading, setLoading] = useState(true) // Estado de carregamento

    const imagesProduct = base?.pictures || []

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                if (product?.id) { // Verifica se o produto e o ID estão disponíveis
                    const response = await axios.get(`https://api.mercadolibre.com/items/${product.id}`)
                    setBase(response.data)
                }
            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            } finally {
                setLoading(false) // Define como carregado independentemente do sucesso ou falha
            }
        }

        fetchDescription()
    }, [product])

    if (loading) {
        return <div>Carregando...</div> // Mensagem enquanto os dados estão sendo carregados
    }

    if (!product) {
        return <div>Produto não encontrado.</div> // Mensagem se o produto não estiver disponível
    }

    return (
        <Container>
            <StyledLink href="/">Página Inicial</StyledLink>
            <StyledCard>
                <StyledBox>
                    <ImageContainer>
                        <StyledTypographyTitle>{base.title || 'Título não disponível'}</StyledTypographyTitle> {/* Usando base.title */}
                        <Carousel
                            sx={{
                                width: '100%',
                                height: 'auto', // Altura automática após carregado
                            }}
                            indicators={false} // Remove os indicadores
                            navButtonsAlwaysVisible={true} // Botões de navegação sempre visíveis
                            autoPlay={false} // Desativa reprodução automática
                        >
                            {imagesProduct.map((img, index) => (
                                <Item key={index} image={img.url} title={base.title || 'Imagem do Produto'} />
                            ))}
                        </Carousel>
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
