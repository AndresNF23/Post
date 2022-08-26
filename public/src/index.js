import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post pictureprofile="https://th.bing.com/th/id/OIP.OXvzNVQDzwc_tKfpWwJM7wHaF7?pid=ImgDet&rs=1.png" 
        user="Jhon Sebastian"
        ubication="I Dont Know"
        postPhoto=""
        likes="23 Likes"
        description="Hi"
        coments="20">
        </my-post>
        `
    };
}

customElements.define("app-container",AppContainer);