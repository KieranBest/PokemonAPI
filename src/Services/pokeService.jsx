export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
        .then(data => {
        resolve(data)
        })
    })
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
        .then(data => {
        resolve(data)
        })  
    })
}

export function getSinglePokemon({ url }) {
    return new Promise((resolve, reject) => {
        console.log(
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
        resolve(data)
        })
    )
    })
}