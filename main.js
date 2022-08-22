const areaTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptado) {
    let codigoEncriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
        ["a", "ai"],
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
        ["ober", "o"],
        ["ufat", "u"],
        ["ai", "a"],
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