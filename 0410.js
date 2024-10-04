const bolinhas = document.querySelectorAll('.bolinha');
const estadiosSeg = document.querySelector('.estadios-seg');
let index = 0; 

bolinhas.forEach ((bolinha, i) => {
    bolinha.addEventListener('click', () => {
        index = i;
        atualizarEstadios();
    });
});
//função para Atualizar a imagem e as bolinhas ativas 
function atualizarEstadios() {

//Atualiza a posição do estadio
    estadiosSeg.style.transform = `translateX(-${index * 100}%)`;

//atualiza as bolinhas ativas
    bolinhas.forEach(b => b.classList.remove('ativa'));
    bolinhas[index].classList.add('ativa');
}
