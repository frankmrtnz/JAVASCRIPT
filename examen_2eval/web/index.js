class Usuarios extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML=this.template;
    }
    get template() {
        let foto = this.getAttribute("foto");
        let nombre = this.getAttribute("nombre");
        return `<div id='infoUsers'>
            <img id="img" src="./imagenes/${foto}" style='width:120px; height:120px; cursor:pointer;'/>
            <p id="nombre" style='text-align:left;'>${nombre}</p>
        </div>`;
    }
}

let etiqueta = window.customElements.define('ies-usuario', Usuarios);



export {etiqueta};