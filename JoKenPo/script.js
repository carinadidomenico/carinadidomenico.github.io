window.addEventListener('DOMContentLoaded', function() {
       
    enviar.addEventListener ('click', function(){
        let jogador = document.querySelector ("#jogar").value;
        let resultado = document.querySelector ("#resultado");
        let opcoesComputador = ["pedra", "papel", "tesoura", "lagarto", "spock"];
        let computador = opcoesComputador[Math.floor(Math.random(opcoesComputador) * opcoesComputador.length)];
        let resposta = document.querySelector ("#resposta"); 
        
        switch (jogador) {

            case "pedra":
                if (computador == "pedra"){
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Empatou. Tente novamente.";
                }
                else if (computador == "lagarto" || computador == "tesoura"){
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Você venceu!";
                }
                else {
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Você perdeu.";
                }            
            break;

            case "papel":
                if (computador == "papel"){
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Empatou. Tente novamente.";
                }
                else if (computador == "pedra" || computador == "spock"){
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Você venceu!";
                }
                else {
                    resultado.innerHTML = (jogador + " x " + computador);
                    resposta.innerHTML = "Você perdeu.";
                }
            break;

            case "tesoura":
            if (computador == "tesoura"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = ("Empatou. Tente novamente.");
            }
            else if (computador == "lagarto" || computador == "papel"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você venceu!";
            }
            else {
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você perdeu.";
            }
            break;
            case "lagarto":
            if (computador == "lagarto"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Empatou. Tente novamente.";
            }
            else if (computador == "papel" || computador == "spock"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você venceu!";
            }
            else {
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você perdeu.";
            }
            break;
            case "spock":
            if (computador == "spock"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Empatou. Tente novamente.";
            }
            else if (computador == "tesoura" || computador == "pedra"){
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você venceu!";
            }
            else {
                resultado.innerHTML = (jogador + " x " + computador);
                resposta.innerHTML = "Você perdeu.";
            }
            break;
            case "selecionar":
                resultado.innerHTML = "";
                resposta.innerHTML = "";
        }
        
    });

    // selecionar.addEventListener ('click', function() {
    //     console.log ("não deu");
    //     let jogador = document.querySelector ("#jogar").value;
    //     let selecionar = document.querySelector ("#selecionar");

    //     if (jogador == "selecionar"){
    //     resultado.innerHTML = " ";
    //     resposta.innerHTML = " ";
    //     };

    // });
     
    
});