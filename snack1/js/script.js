"use strict"

console.log("start")

const arrayBici = [
    {
        name: "triban",
        weight: 11
    },
    {
        name: "btwin",
        weight: 16
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


function funzioneProva(array){
    let minWeightBikes = array[0]
    for (let i = 0; i < array.length; i++) {
        const {weight} = array[i]
        if (weight < minWeightBikes.weight) {
            minWeightBikes = array[i]
        }
    }
    return minWeightBikes
}