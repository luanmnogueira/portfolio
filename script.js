

// efeito letra digitando
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

//chamando função letra digitando
escrevendoLetra();

// Icone Menu quando ativado "clicado" chama outro Icone
function menuMobile(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacaoPrimaria');
    
    
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

//chama a função menu pop-up mobile
menuMobile();

//função global
function sobreMim(){

    // alternancia experiência profissional
    const divExperiencia = document.querySelectorAll('.conteudoExperiencia div');
    const liExperiencia = document.querySelectorAll('.conteudoExperiencia ul li');

    // alternancia educação 
    const divEducacao = document.querySelectorAll('.conteudoEducacao div');
    const liEducacao = document.querySelectorAll('.conteudoEducacao ul li');


    divExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducacao[0].classList.add('ativo')

    //experiencia
    //função para slide
    //forEach faz um loop em cada seção
    // cada div ele vai remover a classe ativo
    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        // botão
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    //educacao
    function slideShow2(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
        });
        // botão
        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    //click botao
    liExperiencia.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    liEducacao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

}

sobreMim();