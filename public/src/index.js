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
        postphoto="./images/hamster.png "
        like="23 Likes"
        description="Hi"
        comments="20"
        date="20 Agost"
        ></my-post>
        `
    };
}

customElements.define("app-container",AppContainer);