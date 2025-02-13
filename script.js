document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("show");
        });
    });
});

function loadComponent(component) {
    console.log("Carregando componente: " + component);
    // Adicione a lógica para carregar o componente
}

function loadSavedComponent(savedComponent) {
    console.log("Carregando teste salvo: " + savedComponent);
    // Adicione a lógica para carregar o teste salvo
}