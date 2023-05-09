class Contato {
  nomeContato: string
  categoria: string
  telefone: string
  email: string
  id: number

  constructor(
    nomeContato: string,
    categoria: string,
    telefone: string,
    email: string,
    id: number
  ) {
    ;(this.nomeContato = nomeContato),
      (this.categoria = categoria),
      (this.telefone = telefone),
      (this.email = email),
      (this.id = id)
  }
}

export default Contato
