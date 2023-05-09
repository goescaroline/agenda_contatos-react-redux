import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'

import { RootReducer } from '../../store'
import { MainContainer } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, categoria } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (categoria === 'Favoritos') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === 'Favoritos'
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeContato}>
            <Contato
              id={c.id}
              nomeContato={c.nomeContato}
              telefone={c.telefone}
              email={c.email}
              categoria={c.categoria}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
