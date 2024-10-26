import { useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import {
    StyledCardContent,
    StyledTypography,
    StyledTypographyPrice,
} from '../../styles/StylePrimaryCharacteristics'

import { fetchProductDetails } from '../../api/api'


function PrimaryCharacteristics() {
    const location = useLocation()
    const { product } = location.state || {}

    const [base, setBase] = useState('')

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

    return (
        <StyledCardContent>
            <StyledTypographyPrice>
                Preço: R$ {product.price.toFixed(2)}
            </StyledTypographyPrice>
            <Typography sx={{ marginBottom: '10px' }}>Características: </Typography>
            <StyledTypography>
                Condição: {product.condition === 'used' ? 'Usado' : 'Novo'}
            </StyledTypography>

            {attributesProduct ? (
                attributesProduct.slice(0, 10).map((attr) => (
                    <StyledTypography key={attr.id}>

                        {attr.name}: {attr.value_name}
                    </StyledTypography>
                ))
            ) : (
                <StyledTypography>Nenhum atributo encontrado.</StyledTypography>
            )}

            <a href={product.permalink}>Ver no mercado livre</a>
        </StyledCardContent>
    )
}

export default PrimaryCharacteristics
