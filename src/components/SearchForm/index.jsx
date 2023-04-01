import { useForm } from "react-hook-form"

export function SearchForm({handleSearch}) {
  const {handleSubmit} = useForm()
  return (
    <form action="submit" onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Busque por um cliente" autoComplete="off"  />
    </form>
  )
}