import Header from "../../components/Header";

export default function ManageClients() {
  return (
    <>
    <Header />
    
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" />

        <label htmlFor="address">Endereço</label>
        <input id="address" type="text" />
      </div>

      <div>
        <label htmlFor="city">Cidade</label>
        <input id="city" type="text" />

        <label htmlFor="UF">UF</label>
        <input id="UF" type="text" />

        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="text" />
      </div>
    </>
  )
}