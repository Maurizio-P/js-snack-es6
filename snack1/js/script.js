"use strict"

console.log("start")

const arrayBici = [
    {
        name: "triban",
        weight: 16
    },
    {
        name: "btwin",
        weight: 11
    },
    {
        name: "gravel",
        weight: 22
    },
    {
        name: "gravelXL",
        weight: 24
    }
]


// funzioneProva(arrayBici)
console.log(funzioneProva(arrayBici))


function funzioneProva(bici){
    let minWeightBikes = bici[0]
    for (let i = 0; i < bici.length; i++) {
        if (bici[i].weight < minWeightBikes.weight) {
            minWeightBikes = bici[i]
        }
    }
    // return minWeightBikes
    const {name, weight} = minWeightBikes

    console.log(`La bici più leggera è ${name} ${weight}`)
}