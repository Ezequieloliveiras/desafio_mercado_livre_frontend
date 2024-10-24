import axios from 'axios'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { StyledTypography, } from '../styles/StyleDescription'

function Description() {
    const location = useLocation()
    const { product } = location.state || {}
    const [expandedDescription, setExpandedDescription] = useState(false)
    const [description, setDescription] = useState('')

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const resultDescription = await axios.get(`https://api.mercadolibre.com/items/${product.id}/description`)
                setDescription(resultDescription.data.plain_text)
            } catch (error) {
                console.error('Erro ao buscar a descrição do produto:', error)
            }
        }

        if (product?.id) {
            fetchDescription()
        }
    }, [product])

    const toggleExpandDescription = () => {
        setExpandedDescription(!expandedDescription)
    }

    return (
        <Box sx={{ mt: 2, padding: '20px', borderTop: '1px solid rgba(0, 0, 0, 0.2)' }}>
            <Typography variant='h6' marginBottom="10px">Descrição</Typography>
            <Box
                sx={{
                    maxHeight: expandedDescription ? 'none' : '90px',
                    opacity: expandedDescription ? 1 : 0.6,
                    transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    overflow: 'hidden',
                }}
            >
                <StyledTypography>
                    {description}
                </StyledTypography>
            </Box>
            <Typography
                onClick={toggleExpandDescription}
                sx={{
                    mt: 2,
                    color: '#3483fa',
                    fontSize: '15px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#1c54b2',
                    },
                }}
            >
                {expandedDescription ? 'Ver menos' : 'Ver mais'}
            </Typography>
        </Box>
    )
}

export default Description
