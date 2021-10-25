"use strict"

console.log("start")

const arrayBici = [
    {
        name: "triban",
        weight: "18"
    },
    {
        name: "btwin",
        weight: "16"
    },
    {
        name: "gravel",
        weight: "22"
    },
    {
        name: "gravelXL",
        weight: "24"
    }
]

console.log(arrayBici);

const copyArrayBici = [...arrayBici]
console.log(copyArrayBici);

forArrayBici(copyArrayBici)

function forArrayBici(array){
    for (let i = 0; i < array.length; i++) {
        const {name, weight} = array[i];
        console.log({name, weight});
    }

}




