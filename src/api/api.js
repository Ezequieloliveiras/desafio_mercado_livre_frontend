import axios from 'axios'

// api que solicita para o back-end de acordo com os parametros enviados na requisição.
const searchProducts = async (termoPesquisado, precoMinimo, precoMaximo, condicao) => {
  try {
    const response = await axios.get('https://desafio-mercado-livre-backend.onrender.com/api/dados', {
      params: {
        termoPesquisado,
        precoMinimo,
        precoMaximo,
        condicao,
      },
    })
    return response.data.results

  } catch (error) {

    let errorMessage = ''

    // Verifica se a resposta do servidor está disponível
    if (error.response) {
      errorMessage = `Erro: ${error.response.data}`
    } else if (error.request) {
      
      errorMessage = 'Solicitação feita, mas sem resposta recebida.'
    } else {
      // Algo aconteceu ao configurar a solicitação que acionou um erro
      errorMessage = `Erro ao configurar o pedido: ${error.message}`
    }

    return { error: errorMessage }
  }
}

const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(`https://desafio-mercado-livre-backend.onrender.com/api/products/${productId}`)
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar os detalhes do produto: ' + error.message)
  }
}

const fetchProductDescription = async (productId) => {
  try {
    const response = await axios.get(`https://desafio-mercado-livre-backend.onrender.com/api/products/${productId}/description`)
    return response.data.description
  } catch (error) {
    throw new Error('Erro ao buscar a descrição do produto: ' + error.message)
  }
}

export {
  searchProducts,
  fetchProductDetails,
  fetchProductDescription
}
