class Carrusel extends HTMLElement{
    constructor(){
       super();
       this.fotos =this.getAttribute('fotos').split(";");
       this.posicion=0;
       let shadowRoot = this.attachShadow({mode: 'open'});
       shadowRoot.innerHTML = this.template;
       shadowRoot.getElementById("anterior").addEventListener("click", () => {
                     if (this.posicion > 0) {
                          this.posicion--;
                          this.shadowRoot.querySelector("img").src=this.fotos[this.posicion];
                     }
       }); 
       shadowRoot.getElementById("posterior").addEventListener("click", () => {
                     if (this.posicion < (this.fotos.length-1)) {
                         this.posicion++;
                         this.shadowRoot.querySelector("img").src=this.fotos[this.posicion];
                     }
       });
     }
     
     get template(){
           let foto = this.fotos[this.posicion];
           return `<div>
                        <button type="button" id="anterior">-</button>
                        <img width="300" src="${foto}">
                        <button type="button" id="posterior">+</button>
                   </div>`;
        }
  }
  let etiqueta = window.customElements.define('carrusel-d', Carrusel);
  
  export {etiqueta};
  