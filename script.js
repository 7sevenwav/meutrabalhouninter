let botao = document.querySelector('#botao');
botao.style.background="orange";
let cliqueNovamente=false
let estaQuebrado=false;
let contaCliques=0

    botao.addEventListener("mouseover",e =>{
        botao.style.background="yellow";});

    botao.addEventListener("mouseout",e =>{
        botao.style.background="orange";});
    
    botao.addEventListener("click",e =>{
        
    contaCliques++;

    if(contaCliques>=1){
        botao.style.background="#ff4500";
        botao.innerHTML="Seja bem vindo!";
        cliqueNovamente=true;}});
    
    botao.addEventListener("click",e =>{
        if(contaCliques>=2){
            botao.style.background="#ff4500";
            botao.innerHTML="A seguir minha biografia!";
            estaQuebrado=true;}});

