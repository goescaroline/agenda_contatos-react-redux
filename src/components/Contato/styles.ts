import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  padding: 16px;
  border: 1px solid ${variaveis.roxo};
  border-radius: 16px;
  margin-bottom: 32px;
`

export const ContatoCategoria = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NomeContato = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  background-color: ${variaveis.roxo2};
  border-radius: 8px;
`

export const DadosContato = styled.input`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.roxo};
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.roxo2};
  border-radius: 8px;
  margin-right: 8px;
`
