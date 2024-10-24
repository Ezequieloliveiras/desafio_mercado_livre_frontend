import axios from 'axios'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { StyledTypography, StyledBox } from '../styles/StyleSecondCharacteristics'

function SecondCharacteristics() {
    const location = useLocation()
    const { product } = location.state || {}
    const [base, setBase] = useState('')
    const [expandedAttributes, setExpandedAttributes] = useState(false)
    const attributesProduct = base?.attributes

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

    const toggleExpandAttributes = () => {
        setExpandedAttributes(!expandedAttributes)
    }

    return (
        <StyledBox>
            <Typography variant='h6' marginBottom="10px">Todas as características</Typography>
            <Box
                sx={{
                    maxHeight: expandedAttributes ? 'none' : '60px', // Altura controlada
                    opacity: expandedAttributes ? 1 : 0.5, // Opacidade
                    transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out', // Transição suave
                    overflow: 'hidden', // Evita que o texto ultrapasse o contêiner
                }}
            >
                {attributesProduct ? (
                    attributesProduct.slice(0, 1000).map((attr) => (
                        <StyledTypography key={attr.id}>
                            {attr.name}: {attr.value_name}
                        </StyledTypography>
                    ))
                ) : (
                    <StyledTypography>Nenhum atributo encontrado.</StyledTypography>
                )}
            </Box>
            <Typography
                onClick={toggleExpandAttributes}
                sx={{
                    mt: 2,
                    color: '#3483fa',
                    cursor: 'pointer',
                    fontSize: '15px',
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#1c54b2',
                    },
                }}
            >
                {expandedAttributes ? 'Ver menos' : 'Ver mais'}
            </Typography>
        </StyledBox>
    )
}

export default SecondCharacteristics
