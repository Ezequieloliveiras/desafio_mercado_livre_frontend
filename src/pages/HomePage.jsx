import { useState } from 'react'
import { Typography } from '@mui/material'
import { searchProducts } from '../api/api.js'

import FormSubmit from '../components/Form.jsx'
import CardProducts from '../components/CardProducts.jsx'
import InfoTitle from '../components/InfoTitle.jsx'

// componente Pai que renderiza os componentes filhos na página inicial
function App() {

  const [products, setProducts] = useState([])
  const [termoPesquisado, setTermoPesquisado] = useState('')
  const [precoMinimo, setPrecoMinimo] = useState('')
  const [precoMaximo, setPrecoMaximo] = useState('')
  const [condicao, setCondicao] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // função de pesquisa do produto
  const handleSearch = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    setProducts([])

    try {
      const results = await searchProducts(termoPesquisado, precoMinimo, precoMaximo, condicao)
      if (results.error) {
        setError(results.error);
      } else {
        setProducts(results);
      }

    } catch (err) {
      setError('Erro ao buscar produtos. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  // os componentes repassam os valores de estado através de props para os componenentes

  return (
    <main
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <Typography sx={{ margin: '50px 0px' }} variant='h4'>Produtos Mercado Livre</Typography>

      <FormSubmit
        handleSearch={handleSearch}
        setTermoPesquisado={setTermoPesquisado}
        setPrecoMinimo={setPrecoMinimo}
        setPrecoMaximo={setPrecoMaximo}
        setCondicao={setCondicao}
        condicao={condicao}
      />

      <InfoTitle
        loading={loading}
        error={error}
        products={products}
      />

      {
        Array.isArray(products) && products.length > 0 ? (
          products.map(item => (
            <CardProducts
              item={item}
              key={item.id}
            />
          ))
        ) : (
          <></>
        )
      }

    </main>
  )
}

export default App
