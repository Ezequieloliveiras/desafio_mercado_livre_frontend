import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchProductDescription } from '../../api/api'

import { StyledTypography, } from '../../styles/StyleDescription'

function Description() {
    const location = useLocation()
    const { product } = location.state || {}
    const [expandedDescription, setExpandedDescription] = useState(false)
    const [description, setDescription] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const resultDescription = await fetchProductDescription(product.id)
                setDescription(resultDescription)
                setErrorMessage('')
            } catch (error) {

                if (error.response && error.response.status === 500) {
                    setErrorMessage(error.response.data) 
                } else {
                    setErrorMessage('Erro ao carregar a descrição do produto.')
                }
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
                    {description ? (
                        <p>{description}</p>
                    ) : errorMessage ? (
                        <p style={{ color: 'red' }}>{errorMessage}</p> // Exibe a mensagem de erro como texto
                    ) : (
                        <p>Carregando descrição...</p>
                    )}
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
