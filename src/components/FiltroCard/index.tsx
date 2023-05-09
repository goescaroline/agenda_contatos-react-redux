import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  categoria: 'Todos' | 'Favoritos'
}

const FiltroCard = ({ legenda, categoria }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const verificaEstaAtivo = () => {
    const mesmoValor = filtro.categoria === categoria
    return mesmoValor
  }

  const contarContatos = () => {
    if (categoria === 'Todos') return contatos.itens.length
    if (categoria === 'Favoritos')
      return contatos.itens.filter((item) => item.categoria === categoria)
        .length
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        categoria
      })
    )
  }
  const contador = contarContatos()
  const ativo = verificaEstaAtivo()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Label>({contador})</S.Label>
      <S.Contador>{legenda}</S.Contador>
    </S.Card>
  )
}
export default FiltroCard
