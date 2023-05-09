import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    background-color: ${variaveis.preto};
    color: ${variaveis.branco};
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 16px;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  font-weight: 400;
  color: ${variaveis.branco};
  border: 3px solid ${variaveis.roxo};
  width: 100%;
  margin-bottom: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.roxo};
  font-size: 14px;
`

export default EstiloGlobal
