export const name: string = 'Carlos'
export const age: number = 26
export let state: boolean = true

export const templateString = `
    Esto es un string 
    multilinea
    que puede tener
    '
    "
    inyectar valores como ${name}
    expresiones ${1+1}
    booleanos ${ state}
`

state = false


console.log({
    name,
    age,
    state
})

console.log(templateString)
