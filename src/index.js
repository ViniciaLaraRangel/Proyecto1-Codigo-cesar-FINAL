//Función para Encriptar
function encriptarPalabra() {
//Declarar el offset, convertirlo a entero y aplicamos modulo 26 para que resumir vueltas
    let key = parseInt(document.getElementById("key").value)%26;
    //console.log(key);
//Conseguir la palabra desde HTML para declararla y convertirla a Mayúsculas
    let codex=document.getElementById("palabraIntroducida").value.toUpperCase();
    //console.log(codex);
//Paso 1: Condicionar el bucle para recorrer la posición de la palabra introducida==> Tip: charCodeAt
for (let posicionA=0; posicionA<codex.length; posicionA ++){
    //console.log(posicionA);
//Paso 2: Obtener de acuerdo a la posiciónA, la nueva posición Ascii
let palabra = codex.charCodeAt(posicionA);
    //console.log(palabra);
/*Paso 3: Aplicar la fórmula (x-65) + n) % 26 + 65 en donde:*/
/*x es la posición ASCII y n el "key" para codificar*/
let enCodex = (palabra -65+ key) % 26 + 65;
//console.log(enCodex);
//Paso 4: Con la posición ASCII obtenida, devolver cadena obtenida ==> Tip: fromCharCode
let enCodexResultado = String.fromCharCode(enCodex);
//console.log(enCodexResultado);
//Paso 5: Imprime resultado en input de codificado, fórmula resumida
document.getElementById("resultado").value += enCodexResultado;

}
};

//Función para desencriptar
function desencriptarPalabra() {
    let key = parseInt(document.getElementById("key").value)%26;
    //console.log(key);
    let deCodex=document.getElementById("resultado").value.toUpperCase();
    document.getElementById("palabraIntroducida").value = " ";
    //console.log(deCodex);
for (let posicionB =0; posicionB<deCodex.length; posicionB ++){
    //console.log(posicionB);
let palabraCodex = deCodex.charCodeAt(posicionB);
    //console.log(palabraCodex);
let desenCodex = (palabraCodex-65-key) % 26 + 65;
    if (desenCodex <65) {
        desenCodex += 26;
    //console.log(desenCodex);
    } 
let deCodexResultado = String.fromCharCode(desenCodex);
    //console.log(deCodexResultado);
document.getElementById("palabraIntroducida").value += deCodexResultado;

}
};
