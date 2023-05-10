export class clientesListas extends HTMLElement{
    constructor (){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
        
        `
    }
}customElements.define("listas",clientesListas);