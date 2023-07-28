const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe");

//função que adiciona classe 'jump' ao elemento mario e a remove após o tempo da animação
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; //Acessa a posição left do elemento pipe

    //Como a propriedade offsetBottom não existe, para acessar a posição de bottom do Mario precisamos usar 'getComputedStyle":
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //  console.log(marioPosition);

    if(pipePosition <= 110 && marioPosition < 90 && pipePosition > 0){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;  

        mario.src = "images/game-over.png";
        mario.style.width = '65px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
}, 10)

//função jump acionada quando uma tecla é pressionada
document.addEventListener('keydown', jump);