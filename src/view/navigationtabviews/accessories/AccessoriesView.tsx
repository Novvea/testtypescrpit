
import { useState, useEffect } from 'react'
import PokemonAPIService from '../../../shared/api/service/PokemonAPIService'
import { useDebounce } from '../../../components/hooks/useDebounce'

export const AccessoriesView = () => {
  const [pokemonData, setPokemonData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const debounceSearchTerm = useDebounce(search, 500)

  const fetchData = async () => {
    setLoading(true)
    const response = await PokemonAPIService.searchPokemon(search)
    setPokemonData(response)
  }

  const displayData = () => {
    
      return
      <div>
        <h1>Name: {pokemonData.name}</h1>
      </div>
  }
  }

  useEffect(() => {
    fetchData()
  }, [debounceSearchTerm])


  return (
    <div>
      <input placeholder="whos that pokemon?" onChange={(event)=> setSearch(event.target.value)}/>
      {!loading ? displayData() : <h1>No data</h1>}
      <button></button>
     
    </div>
  )
}
