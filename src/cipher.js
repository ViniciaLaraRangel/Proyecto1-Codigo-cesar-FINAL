window.cipher = {
  encode: function(string,offset){
    let palabraCifrada="";
    for (let posicionA=0; posicionA<string.length; posicionA ++){
      //console.log(posicionA);
      //Paso 2: Obtener de acuerdo a la posiciónA, la nueva posición Ascii
      let palabra = string.charCodeAt(posicionA);
          //console.log(palabra);
      /*Paso 3: Aplicar la fórmula (x-65) + n) % 26 + 65 en donde:*/
      /*x es la posición ASCII y n el "key" para codificar*/
      let enCodex = (palabra-65+(offset%26)) % 26 + 65;
      //console.log(enCodex);
      //Paso 4: Con la posición ASCII obtenida, devolver cadena obtenida ==> Tip: fromCharCode
      let enCodexResultado = String.fromCharCode(enCodex);
      //console.log(enCodexResultado);
      palabraCifrada += enCodexResultado;  
    }
    return palabraCifrada;
  },

  decode: function(string,offset) {
    let palabraCifrada="";
    for (let posicionB=0; posicionB<string.length; posicionB ++){
      //console.log(posicionB);
      let palabraCodex = string.charCodeAt(posicionB);
          //console.log(palabraCodex);
      let desenCodex = (palabraCodex-65-offset) % 26 + 65;
          if (desenCodex <65) {
              desenCodex += 26;
          //console.log(desenCodex);
          } 
      let deCodexResultado = String.fromCharCode(desenCodex);
          //console.log(deCodexResultado);
      palabraCifrada += deCodexResultado;
    }
    return palabraCifrada;
  }
}