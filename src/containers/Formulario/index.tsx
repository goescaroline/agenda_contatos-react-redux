import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, MainContainer } from '../../styles'
import { Opcoes, Titulo } from './styles'
import { salvar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeContato, setNomeContato] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState('todos')

  const criarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      salvar({
        nomeContato,
        categoria,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={criarContato}>
        <Campo
          value={nomeContato}
          onChange={(evento) => setNomeContato(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Número do contato"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="E-mail do contato"
        />
        <Opcoes>
          <input
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
            name="prioridade"
            type="radio"
            id="favoritos"
          />
          <label htmlFor="favoritos">Favoritos</label>
          <input
            defaultChecked={categoria === 'todos'}
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
            name="prioridade"
            type="radio"
            id="todos"
          />
          <label htmlFor="todos">Todos</label>
        </Opcoes>
        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
