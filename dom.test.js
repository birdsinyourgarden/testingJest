const cambiarTexto = require('./dom');

test('cambia el texto del parráfo', () => {
    document.body.innerHTML = `
    <div id="app">
        <button id="btn">Cambia el texto</button>
        <p id="text">Texto inicial</p>
    </div>
    `;
    cambiarTexto();
    expect(document.getElementById('text').textContent).toBe('Texto cambiado');
});