import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
    StyledCard,
    StyledCardMedia,
    StyledCardContent

} from '../styles/StyleCardProducts'

// essa função é responsável por exibir os cards de cada produto na pagina inicial
const CardProduct = ({ item }) => {
  const navigate = useNavigate()

  const handleProductClick = () => {
    navigate(`/product/${item.id}`, { state: { product: item } })
  }

  return (
    <StyledCard key={item.id} onClick={handleProductClick}>
      <StyledCardMedia
        src={item.thumbnail}
        alt={item.title}
      />
      <StyledCardContent>
        <Typography sx={{ color: 'grey' }} variant="p">{item.id}</Typography>
        <Typography sx={{ margin: '5px 0px' }} variant="h6">{item.title}</Typography>
        <Typography sx={{ margin: '5px 0px' }} variant="body1">R$ {item.price}</Typography>
        <Typography variant="body2" color='grey'>
          {item.condition === 'used' ? 'Usado' : '' || item.condition === 'new' ? 'Novo' : ''}
        </Typography>
        <Typography variant="body2">{item.description}</Typography>
      </StyledCardContent>
    </StyledCard>
  )
}

export default CardProduct
