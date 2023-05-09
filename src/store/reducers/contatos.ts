import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeContato: 'Caroline Goes',
      categoria: 'Favoritos',
      telefone: '(11)95913-6366',
      email: 'goes_caroline@hotmail.com'
    },
    {
      id: 2,
      nomeContato: 'Ciclano Sauro',
      categoria: 'Todos',
      telefone: '(21)95658-5654',
      email: 'sauro_ciclano232@gmail.com'
    },
    {
      id: 3,
      nomeContato: 'Fulano da Silva',
      categoria: 'Todos',
      telefone: '(11)95656-6556',
      email: 'fulano_silva@hotmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    removeContato: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    salvar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[(state.itens.length = 1)]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { removeContato, editar, salvar } = contatosSlice.actions
export default contatosSlice.reducer
