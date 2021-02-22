import http from '../PokemonAPI'

const searchPokemon = (search: string) => {
  return http.get(`/pokemon/${search}`)
}

export default {
  searchPokemon
}