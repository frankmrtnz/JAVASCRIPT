class RepasoComponente extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.template;
    }
    get template() {
        let nombre = this.getAttribute("nombre");
        let texto = this.innerHTML;
        return `<span>Resultado:</span><input type="text" id="caja" value="${nombre}">`;
    }
}
let etiqueta = window.customElements.define('repaso-componente', RepasoComponente);

function cambiar() {
    let elemento = document.getElementsByTagName("repaso-componente")[0];
    elemento.shadowRoot.querySelector("input#caja").value = "HOLA";
}

export { etiqueta, cambiar };
