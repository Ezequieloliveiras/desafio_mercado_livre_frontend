import { Grid2, Container, Card } from '@mui/material'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
&& {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    padding: 0px;
}
`

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  cursor: pointer;
`

const StyledCardMedia = styled.img`
  width: auto;
  height: 300px;
  object-fit: cover;   
  display: block;
  margin: 0 auto;
`


const StyledCardContent = styled.div`
  flex-grow: 1;
  padding: 16px;
`

const StyledGrid = styled(Grid2)`
  display: flex;
  justify-content: center;
`

export {
  StyledContainer,
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  StyledGrid
}
