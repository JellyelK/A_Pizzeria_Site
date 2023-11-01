//Exibir balão das redes sociais
const mostrarBalao = document.getElementById('mostrar-balao');
const balao = document.getElementById('balao');

mostrarBalao.addEventListener('click', (event) => {
    event.preventDefault();
    balao.style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (event.target !== mostrarBalao) {
        balao.style.display = 'none';
    }
});