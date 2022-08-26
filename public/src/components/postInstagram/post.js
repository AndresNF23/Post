class MyPost extends HTMLElement{

    static get observedAttributes() {
        return["pictureprofile", "user", "ubication", "postPhoto", "like", "description", "comments", "date"];   
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
      }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
      }
    
    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/components/postInstagram/style.css"
        <section>
            <div class="Header">
                <div class= "User">
                    <img src= "${this.pictureprofile}"
                    <div class = "Username">
                        <h3>${this.user}</h3>
                        <h3>${this.ubication}</h3>
                        
                    </div>
                    <img src="./public/images/3points.svg">
                </div>
                <div class= "Iconos" src= "./public/images"
            </div>
            <div class="Content">
                <img src="${this.postPhoto}"
            </div>
            <div class="Iconos">
                <div class="Default">
                    <img src="./public/images/chat.svg">
                    <img src="./public/images/like.svg">
                    <img src="./public/images/share.svg">
            </div>
                    <img src="./public/images/guardar.svg">
            <div class="Description">
                <h3>${this.like}</h3>
            <div class="Info">
                <h3>${this.user}</h3>
                <h3>${this.description}</h3>
            </div>
            <p>${this.comments}</p>
            <p class="Date"> ${this.date}</p>
            </div>
            
    </section>`;
    }
}

customElements.define('my-post',MyPost );
export default MyPost;