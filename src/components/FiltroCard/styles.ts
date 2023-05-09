import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  border: 3px solid
    ${(props) => (props.ativo ? `${variaveis.roxo3}` : `${variaveis.roxo}`)};
  border-radius: 16px;
  margin-top: 16px;
`

export const Contador = styled.span`
  color: ${variaveis.branco};
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  margin-right: 8px;
`

export const Label = styled.label`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${variaveis.branco};
`
