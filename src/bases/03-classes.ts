import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
    constructor(public readonly id: number, public name: string) {

    }

    get imageUrl(): string {
        return `http://pokemon.com/${this.id}.jpg`
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak() {
        console.log(`${this.name} ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves[0].move.name.toUpperCase())
        return data.moves
    }
}

export const charmander = new Pokemon(1, 'Charmander')
//console.log(charmander)
//charmander.speak()
//charmander.scream()
charmander.getMoves()
