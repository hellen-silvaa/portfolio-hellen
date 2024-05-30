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
    this.sendForm = this.sendForm.bind(this);
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

getFormObject(){
    const getFormObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach(field => {
        formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;

}
onSubmission(event){
    event.preventDesault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
}

async sendForm(evenet){
    try{
        this.onSubmission(event)
    await fetch(this.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
    });
    this.displaySucces();
} catch{
this.displayError();
throw new Error(error);
}
}

init(){
    if(this.form) 
        this.formButton.addEventListener("click", this.sendForm);
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