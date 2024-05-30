// ===== Turns the menu into a X =====

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

class ForSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form){
        this.url = this.form.getAttribute("action")
      }  
    }

    displaySucces(){
        this.form.innerHTML = this.settings.success;
    }


displayError(){
    this.form.innerHTML = this.settings.error;

}
sendForm(){
    fetch(this.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: "",
    });
}

init(){
    if(this.form) this.formButton.addEventListener("click", () => this.displaySucces());
    return this;
}
}

const ForSubmit= new ForSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='sucess'> Mensagem enviada!</h1>",
    error: "<h1 class='error'> Não foi possível enviar sua mensagem. </h1>",

});
ForSubmit.init();