/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const areaTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptado) {
    let codigoEncriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],

    ];

    stringEncriptado = stringEncriptado.toLowerCase();


    for (let i = 0; i < codigoEncriptar.length; i++) {
        if (stringEncriptado.includes(codigoEncriptar[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(codigoEncriptar[i][0], codigoEncriptar[i][1]);
        }
    }
    return stringEncriptado;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
    areaTexto.value = ""

}

/* parte desencriptar */

function desencriptar(stringDesencriptado) {
    let codigoDesencriptar = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"],
    ];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < codigoDesencriptar.length; i++) {
        if (stringDesencriptado.includes(codigoDesencriptar[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(codigoDesencriptar[i][0], codigoDesencriptar[i][1]);
        }
    }
    return stringDesencriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(areaTexto.value);
    mensaje.value = textoDesencriptado;
    areaTexto.value = ""

}

/* boton copiar */
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
}