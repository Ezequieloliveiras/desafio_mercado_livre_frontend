import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    StyledTypographyTitle
} from '../styles/StyleProductDetails';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import PrimaryCharacteristics from './PrimaryCharacteristics';
import SecondCharacteristics from './SecondCharacteristics';
import Description from './Description';

function Item({ image, title }) {
    return (
        <Paper elevation={3} style={{  textAlign: 'center', height: '500px' }}>
            <img
                src={image}
                alt={title}
                style={{
                    width: '100%', // Largura total do container
                    maxHeight: '500px', // Altura máxima
                    objectFit: 'contain' // Garante que a imagem seja ajustada sem cortar
                }}
            />
        </Paper>
    );
}

function ProductDetail() {
    const location = useLocation();
    const { product } = location.state || {};
    const [base, setBase] = useState('');

    const imagesProduct = base?.pictures || [];

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const baseUrl = await axios.get(`https://api.mercadolibre.com/items/${product.id}`);
                setBase(baseUrl.data);
            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error);
            }
        };

        if (product?.id) {
            fetchDescription();
        }
    }, [product]);

    return (
        <Container>
            <StyledLink href="/">Página Inicial</StyledLink>
            <StyledCard>
                <StyledBox >
                    <ImageContainer >
                        <StyledTypographyTitle>{product.title}</StyledTypographyTitle>
                        <Carousel
                            sx={{
                                width: '100%',
                                height: 'auto', // Limita a altura do carrossel para telas maiores
                            }}
                            indicators={false} // Ativar indicadores
                            navButtonsAlwaysVisible={true} // Botões de navegação sempre visíveis
                            autoPlay={false} // Desativa reprodução automática
                        >
                            {imagesProduct.map((img, index) => (
                                <Item key={index} image={img.url} title={product.title} />
                            ))}
                        </Carousel>
                    </ImageContainer>
                    <PrimaryCharacteristics />
                </StyledBox>
                <Description />
                <SecondCharacteristics />
            </StyledCard>
        </Container>
    );
}

export default ProductDetail;
