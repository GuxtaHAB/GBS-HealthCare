const container = document.getElementById('container');
const botaoRegistro = document.getElementById('registro');
const botaoLogin = document.getElementById('entrar');
const irParaInicio = document.getElementById('botaoInicio');

botaoRegistro.addEventListener('click', () => {
    container.classList.add("active");
})

botaoLogin.addEventListener('click', () => {
    container.classList.remove("active");
})

irParaInicio.addEventListener('click', () => {
    window.location.href = 'inicio.html';
});