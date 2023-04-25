//buscando a lista de array usando for

let msg=document.getElementById('msg')



const usuarios=[
    {nome: "Huguinho", idade:18},
    {nome: "Zezinho", idade: 19},
    {nome: "Luizinho", idade: 20},

];


const Users =usuarios.length;


for (let i=0; i<Users; i++){
    msg.innerHTML +=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
    

}

/*criando um array de imagens*/
var imagens=[
    'imagem/1.png',
    'imagem/2.jpg',
    'imagem/3.jpg',

];



/*declarando variavel*/
var Index =0;
var time =2000;

/*criando uma função*/

function slideShow(){
    document.getElementById('imagem').src =imagens[Index]; /* pega id e o caminho*/
    Index++;
    if(Index == imagens.length) {Index =0;}/* verifica se tem imagens e conta*/
    setTimeout("slideShow()", time);/*definindo o tempo de 2 milisegundos*/

}

slideShow();