const informacao=document.querySelector('.info')
const senha=document.querySelector('#password')
const gerar=document.querySelector('.btn_gerar')
const copy=document.querySelector('.btn_copy')
let senhaCriar=''

gerar.addEventListener('click',gerarSenha)
copy.addEventListener('click',copiarTexto)

function gerarSenha(){
    senhaCriar=""
    let total=8
    let caracter=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
    0123456789!@#$%*()`

    let number=caracter.length;
    for(var i=0;i<total;i++){
        senhaCriar+=caracter.charAt(Math.floor(Math.random()*number))
    }
    senha.value=senhaCriar;
}

function copiarTexto(){
    console.log('clicou')
    if(senhaCriar == ''){
        alert('Gere sua senha antes')
    }else{
        navigator.clipboard.writeText(senhaCriar)
            informacao.style.display='block'
    }
   
}


