

let barca
let realMadrid
let atletico
let sevilla


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c7dc2a882emsh73eeb94c5e99567p187390jsn70735e247a47',
// 		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=140&season=2020&team=529', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.goals))
// 	.catch(err => console.error(err));


function getTeamData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7dc2a882emsh73eeb94c5e99567p187390jsn70735e247a47',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics/?league=140&season=2021&team=529', options)
        .then(response => response.json())
        .then(
            response=>{
                
                barca=response
                console.log("Barca")
                console.log(barca)

            }
        )
        .catch(err => console.error(err));

    fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics/?league=140&season=2021&team=530', options)
        .then(response => response.json())
        .then(
            response=>{
                atletico=response
                console.log("atletico")
                console.log(atletico)

            }
        )
        .catch(err => console.error(err));

        fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics/?league=140&season=2021&team=541', options)
        .then(response => response.json())
        .then(
            response=>{
                realMadrid=response
                console.log("Real Madrid")
                console.log(realMadrid)

            }
        )
        .catch(err => console.error(err));

    fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics/?league=140&season=2021&team=536', options)
        .then(response => response.json())
        .then(
            response=>{
                sevilla=response
                console.log("sevilla")
                console.log(sevilla)
            }
        )
        .catch(err => console.error(err));
}

getTeamData()