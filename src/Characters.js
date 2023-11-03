function Personaje(nombre, vida, poder, ataque1, ataque2, imagen, avatar) {
    this.nombre = nombre,
        this.vida = vida,
        this.poder = poder,
        this.ataque1 = ataque1,
        this.ataque2 = ataque2,
        this.imagen = imagen,
        this.avatar = avatar
};

// Creación de personajes
let personajeJake = new Personaje(
    "Jake",
    150,
    30,
    {
        nombre: "Puño Elastico",
        descripcion: "Un puñetazo que resta 30 de vida",
        usar: function (valorPoder) { return valorPoder }
    },
    {
        nombre: "Lluvia de puñetazos",
        descripcion: "Resta 30, 40 o 60 de vida, o nada.",
        usar: function (valorPoder) { let valorMultiplicador = Math.floor(Math.random() * (5 - 1)); let valorAtaque = valorPoder * valorMultiplicador; return valorAtaque }
    },
    "../img/characters/Jake.gif",
    "../img/characters/Jake_avatar.jpeg"
)

let personajeGoku = new Personaje(
    "Goku",
    200,
    50,
    {
        nombre: "Puñetazo",
        descripcion: "Resta 50 de vida con su espada",
        usar: function (valorPoder) { return valorPoder }
    },
    {
        nombre: "Kame-Hame-Ha",
        descripcion: "Puede restar 100 de vida o fallar",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorAtaque = valorPoder * 2 } else { valorAtaque = 0 }; return valorAtaque }
    },
    "../img/characters/Goku.gif",
    "../img/characters/Goku_avatar.jpeg"
)

let personajeGhost = new Personaje(
    "Fantasma",
    120,
    25,
    {
        nombre: "Ataque Neblina",
        descripcion: "Resta 15 0 30 de vida con su neblina",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorAtaque = valorPoder * 2 } else { valorAtaque = valorPoder }; return valorAtaque }
    },
    {
        nombre: "Ataque murciélago",
        descripcion: "El enemigo o tú pierde 75 de vida",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorAtaque = valorPoder * 3; return valorAtaque } else { personajeReptiliano.vida -= valorPoder * 3; return 0 } }
    },
    "../img/characters/Ghost.gif",
    "../img/characters/Ghost_avatar.jpeg"
)

let personajeSonic = new Personaje(
    "Sonic",
    125,
    40,
    {
        nombre: "Tornado",
        descripcion: "Resta 25 o 50 de vida con su tornado",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorAtaque = valorPoder } else { valorAtaque = valorPoder / 2 }; return valorAtaque }
    },
    {
        nombre: "Caos",
        descripcion: "Resta 80 de vida, pierdes 20 de vida",
        usar: function (valorPoder) { personajeSonic.vida -= 20; return 80 }
    },
    "../img/characters/Sonic.gif",
    "../img/characters/Sonic_avatar.jpg"
)

// Lista de personajes para la batalla
let listadoPersonajes = []
listadoPersonajes.push(personajeJake, personajeGoku, personajeGhost, personajeSonic)