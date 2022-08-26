class MyPost extends HTMLElement{

    static get observedAttributes() {
        return["pictureprofile", "user", "ubication", "postPhoto", "likes", "description", "comments", "when"];   
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
                    <img src= "./images/pictureprofile.png" alt= "PictureProfile">
                    <div class = "Username">
                        <h3>${this.user}</h3>
                        <h3>${this.ubication}</h3>
                </div>
            <div class> = "Description">
            
            
    </section>`;
    }
}

customElements.define('my-post',MyPost );
export default MyPost;