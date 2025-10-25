
let passwordGenerator = document.getElementById('passwordGenerator')

function generarContraseña(longitud = 12){
    const MAYUSCULAS ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    const minusculas = "abcdefghijklmnñopqrstuvwxyz"
    const numeros = "0123456789"
    const simbolos = "#$%&-+*/"
    let conjunto = MAYUSCULAS + minusculas + numeros + simbolos

    for (let i = 0; i < longitud; i++){
        const randomindex = Math.floor(Math.random() * conjunto.length)
        passwordGenerator.value += conjunto[randomindex]
    }

    
}