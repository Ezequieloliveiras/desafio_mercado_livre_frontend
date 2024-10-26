import {
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material'

import {
    StyledBox,
    StyledGridContainer,
    StyledGridItem,
    StyledButton
} from '../../styles/StyleForm'

// Formulario de preechimento da pesquisa na pagina inicial
function Form({
    termoPesquisado,
    setTermoPesquisado,
    precoMinimo,
    setPrecoMinimo,
    precoMaximo,
    setPrecoMaximo,
    condicao,
    setCondicao,
    handleSearch
}) {
    return (
        <StyledBox>
            <StyledGridContainer container spacing={3}>
                <StyledGridItem xs={12} md={4}>
                    <TextField
                        label="Termo de pesquisa"
                        value={termoPesquisado}
                        onChange={(e) => setTermoPesquisado(e.target.value)}
                        fullWidth
                        variant="outlined"
                        required
                    />
                </StyledGridItem>

                <StyledGridItem xs={12} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Condição</InputLabel>
                        <Select
                            value={condicao}
                            onChange={(e) => setCondicao(e.target.value)}
                            label="Condição"
                            required
                        >
                            <MenuItem value="">Escolha a condição</MenuItem>
                            <MenuItem value="new">Novo</MenuItem>
                            <MenuItem value="used">Usado</MenuItem>
                            <MenuItem value="not_specified">Não especificado</MenuItem>
                        </Select>
                    </FormControl>
                </StyledGridItem>

                <StyledGridItem xs={12} md={3}>
                    <TextField
                        label="Preço Mínimo"
                        type="number"
                        value={precoMinimo}
                        onChange={(e) => setPrecoMinimo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </StyledGridItem>

                <StyledGridItem xs={12} md={3}>
                    <TextField
                        label="Preço Máximo"
                        type="number"
                        value={precoMaximo}
                        onChange={(e) => setPrecoMaximo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </StyledGridItem>

                <StyledGridItem xs={12} md={3}>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleSearch}
                    >
                        Buscar
                    </StyledButton>
                </StyledGridItem>
            </StyledGridContainer>
        </StyledBox>
    )
}

export default Form
