export const pokemonIds = [1, 20, 30, 34, 66]
pokemonIds.push(Number('100'))

interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const pokemons: Pokemon[] = []

pokemons.push(bulbasaur)
console.log(pokemons)