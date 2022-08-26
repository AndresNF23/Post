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
        <my-post pictureprofile="./images/fotoinsta.jpg"
        user="Jhon Sebastian"
        ubication="I Dont Know"
        postPhoto="./images/hamster.png "
        likes="23 Likes"
        description="Hi"
        coments="20"
        ></my-post>
        `
    };
}

customElements.define("app-container",AppContainer);