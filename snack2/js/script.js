console.log("start");

const arrayTeam = [
    {
        name: "ciao",
        points: 0,
        fouls: 0,
    },
    {
        name: "non",
        points: 0,
        fouls: 0,
    },
    {
        name: "ho",
        points: 0,
        fouls: 0,
    },
    {
        name: "nomi",
        points: 0,
        fouls: 0,
    },
]

console.log(arrayTeam);
const newArrayTeam = []

generateValueKey(arrayTeam)

function generateValueKey(team){
    for (let i = 0; i < team.length; i++) {
        const ranFouls = Math.ceil(Math.random() * 100)
        const ranPoints = Math.ceil(Math.random() * 200)

        team[i].points = ranPoints
        team[i].fouls = ranFouls
        
        const {name, fouls} = arrayTeam[i]

        const teamForNewArray = {name, fouls}
    
        console.log("riga 39" + name + fouls);
        newArrayTeam.push(teamForNewArray)
    }
    
    // console.log(arrayTeam);
    console.log(newArrayTeam);
}