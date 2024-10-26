import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchProductDetails } from '../../api/api'

import { StyledTypography, StyledBox, ExpandableTypography } from '../../styles/StyleSecondCharacteristics'

function SecondCharacteristics() {
    const location = useLocation()
    const { product } = location.state || {}
    
    const [base, setBase] = useState('')
    const [expandedAttributes, setExpandedAttributes] = useState(false)
    const attributesProduct = base?.attributes

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const baseUrl = await fetchProductDetails(product.id)
                setBase(baseUrl)
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
                    maxHeight: expandedAttributes ? 'none' : '60px',
                    opacity: expandedAttributes ? 1 : 0.5,
                    transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
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
            <ExpandableTypography onClick={toggleExpandAttributes}>
                {expandedAttributes ? 'Ver menos' : 'Ver mais'}
            </ExpandableTypography>

        </StyledBox>
    )
}

export default SecondCharacteristics
