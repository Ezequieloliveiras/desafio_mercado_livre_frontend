import {
    Grid2,
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material'

import { StyledBox } from '../styles/StyleForm'

// formulario de preechimento da pesquisa na pagina inicial
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
            <Grid2
                container
                spacing={3}
                alignItems="center"
                padding={2}
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',    // Aplica 'row' a partir de telas pequenas (tablet e acima)
                    },
                }}
            >

                <Grid2 xs={12} md={4} sx={{backgroundColor:'#fff'}}>
                    <TextField
                        label="Termo de pesquisa"
                        value={termoPesquisado}
                        onChange={(e) => setTermoPesquisado(e.target.value)}
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid2>

                <Grid2 xs={12} md={4} minWidth="210px" sx={{backgroundColor:'#fff'}}>
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
                </Grid2>

                <Grid2 xs={12} md={3} sx={{backgroundColor:'#fff'}}>
                    <TextField
                        label="Preço Mínimo"
                        type="number"
                        value={precoMinimo}
                        onChange={(e) => setPrecoMinimo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid2>

                <Grid2 xs={12} md={3} sx={{backgroundColor:'#fff'}}>
                    <TextField
                        label="Preço Máximo"
                        type="number"
                        value={precoMaximo}
                        onChange={(e) => setPrecoMaximo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid2>

                <Grid2 xs={12} md={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit" onClick={handleSearch}>
                        Buscar
                    </Button>
                </Grid2>

            </Grid2>
        </StyledBox>
    )
}

export default Form
