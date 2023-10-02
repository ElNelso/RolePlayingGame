function Personaje (nombre, vida, poder, ataque1, ataque2, imagen, avatar) {
    this.nombre = nombre,
    this.vida = vida,
    this.poder = poder,
    this.ataque1 = ataque1,
    this.ataque2 = ataque2,
    this.imagen = imagen,
    this.avatar = avatar
};

let Jake = new Personaje (
"Jake", 
150, 
30, 
{
nombre: "Puño Elastico", 
descripcion: "Un puñetazo que resta 30 de vida",
usar: function(valorPoder) {return valorPoder}
},
{
nombre: "Lluvia de puñetazos", 
descripcion: "Resta 20, 40 o 60 de vida, o nada.",
usar: function(valorPoder) { let valorMultiplicador =  Math.floor(Math.random() * (5 - 1)); let valorAtaque = valorPoder*valorMultiplicador; return valorAtaque}
},
"images/personajes/Jake.gif",
"images/personajes/Jake_avatar.jpeg"
)

let Goku = new Personaje (
    "Goku", 
    200, 
    50, 
    {
    nombre: "Puñetazo",
    descripcion: "Resta 50 de vida con su espada",
    usar: function(valorPoder) {return valorPoder}
    },
    {
    nombre: "Kame-Hame-Ha", 
    descripcion: "Puede restar 100 de vida o fallar",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*2} else {valorAtaque = 0} ; return valorAtaque}
    },
    "images/personajes/Goku.gif",
    "images/personajes/Goku_avatar.jpeg"
    )

let Ghost = new Personaje (
    "Fantasma", 
    120, 
    25, 
    {
    nombre: "Ataque Neblina",
    descripcion: "Resta 15 0 30 de vida con su neblina",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*2} else {valorAtaque = valorPoder} ; return valorAtaque}
    },
    {
    nombre: "Ataque murciélago", 
    descripcion: "El enemigo o tú pierde 75 de vida",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*3; return valorAtaque } else { personajeReptiliano.vida -= valorPoder*3; return 0 }}
    },
    "images/personajes/Ghost.gif",
    "images/personajes/Ghost_avatar.jpeg"
    )

let Sonic = new Personaje (
        "Sonic", 
        125, 
        40, 
        {
        nombre: "Tornado",
        descripcion: "Resta 25 o 50 de vida con su tornado",
        usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder} else {valorAtaque = valorPoder/2} ; return valorAtaque}
        },
        {
        nombre: "Caos", 
        descripcion: "Resta 80 de vida, pierdes 20 de vida",
        usar: function(valorPoder) { personajeSonic.vida -= 20; return 80}
        },
        "images/personajes/Sonic.gif",
        "images/personajes/Sonic_avatar.jpg"
        )

let listadoPersonajes = []
listadoPersonajes.push(Jake, Goku, Ghost, Sonic)