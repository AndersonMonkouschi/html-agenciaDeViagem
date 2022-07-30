// Objetos do DOM:
const link = document.querySelector(".botao-formulario");
const form = document.querySelector(".frm_enviar_email_gc");

// Variável que define se o formulário está, ou não, visível:
let formIsVisible = true;

// Controla o evento `click` do link:
link.addEventListener("click", function(event) {
    // Inverte o estado do formulário:
    formIsVisible = !formIsVisible;

    // Atualiza o valor da propriedade de acordo com o novo estado:
    form.style.display = formIsVisible ? "block" : "none";
});
link = 