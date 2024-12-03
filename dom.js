function cambiarTexto() {
    const texto = document.getElementById('text');
    if (texto) {
        texto.textContent = "Texto cambiado";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', cambiarTexto);
    }
});

module.exports = cambiarTexto;