var partidas = [
    {
        "id": 1,
        "time1": "Argentina",
        "time2": "Canada",
        "estadio": "New Atlanta Stadium",
        "data": "20/06",
        "dia": "Quinta",
        "hora": "21h00"
    },
    {
        "id": 2,
        "time1": "Peru",
        "time2": "Chile",
        "estadio": "AT&T Stadium",
        "data": "21/06",
        "dia": "Sexta",
        "hora": "21h00"
    },
    {
        "id": 3,
        "time1": "Equador",
        "time2": "Venezuela",
        "estadio": "Santa Clara",
        "data": "22/06",
        "dia": "Sábado",
        "hora": "19h00"
    },
    {
        "id": 4,
        "time1": "México",
        "time2": "Jamaica",
        "estadio": "NRG Stadium",
        "data": "22/06",
        "dia": "Sábado",
        "hora": "22h00"
    },
    {
        "id": 5,
        "time1": "EUA",
        "time2": "Bolívia",
        "estadio": "AT&T Stadium",
        "data": "23/06",
        "dia": "Domingo",
        "hora": "19h00"
    },
    {
        "id": 6,
        "time1": "Uruguai",
        "time2": "Panamá",
        "estadio": "Miami",
        "data": "22/06",
        "dia": "Domingo",
        "hora": "22h00"
    },
    {
        "id": 7,
        "time1": "Colômbia",
        "time2": "Paraguai",
        "estadio": "NRG Stadium",
        "data": "24/06",
        "dia": "Segunda",
        "hora": "19h00"
    },
    {
        "id": 8,
        "time1": "Brasil",
        "time2": "Costa Rica ou Honduras",
        "estadio": "SoFi Stadium",
        "data": "24/06",
        "dia": "Segunda",
        "hora": "22h00"
    }
]

let partida = document.querySelector("#partida")


for (let i = 0; i < partidas.length; i++) {
    console.log(partidas[i])

        let lista = document.createElement("div")
        let info = `<div id = "info">${partidas[i].estadio} - ${partidas[i].data} - ${partidas[i].dia}</div>`
        let jogo = `<div id= "jogo"><p>${partidas[i].time1}</p> <input type="number" id="gols" size="500"/> <p>X</p> <input type="number" id="gols" size="500"/> <p>${partidas[i].time2}</p></div>`

        lista.innerHTML = info + jogo

        partida.appendChild(lista)

        console.log(partidas[i].time1)

}

console.log(fetch("https://gist.github.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02#file-country-flag-json"))

