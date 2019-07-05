// Crie uma função que calcule o índice de massa corporal de uma pessoa (IMC)

function calculoIMC(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resposta = document.getElementById("resposta");
    var lugarGif= document.getElementById("lugarGif");
    var calculo = peso / (altura * altura);
    var text;
    var gif;
    var cssClass;


    if (calculo < 18){
        text = "Uma deusa.";
        gif = `<img src="https://media.giphy.com/media/409PWZc3bFWY8/giphy.gif" alt="Gif Michelle Obama">`;
        cssClass = "linha1";
    }
    else if(calculo >= 18 && calculo < 25){
        text = "Uma louca.";
        gif = `<img src="https://media.giphy.com/media/3o7TKTMbvS3uzlewsU/giphy.gif" alt="Gif Michelle Obama">`;
        cssClass = "linha2";
    }
    else if( calculo >= 25 && calculo < 30){
        text = "Uma feiticeira.";
        gif = `<img src="https://media.giphy.com/media/3o7TKziIuXtAI2vtPa/giphy.gif" alt="Gif Michelle Obama">`;
        cssClass = "linha3";
    }
    else if(calculo >= 30 && calculo < 40){
        text = "Ela é demais.";
        gif = `<img src="https://media.giphy.com/media/M8zA3KUETXbdm/giphy.gif" alt="Gif Michelle Obama">`;
        cssClass = "linha4";
    }
    else{
        text = "Meu deus ela é demais.";
        gif = `<img src="https://media.giphy.com/media/TI8yz4eu34zDO/giphy.gif" alt="Gif Michelle Obama">`;
        cssClass = "linha5";
    }

    resposta.innerHTML = calculo.toFixed(2) + " - " + text;
    lugarGif.innerHTML = gif; 
    resposta.className = cssClass;
}