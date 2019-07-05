window.addEventListener('DOMContentLoaded', function() {
    
    let botao = document.querySelector('#botao');
    let conteudo = document.querySelector ("#conteudo");
    let respostas = document.querySelector ("#respostas")
    let imagens = [
        `<img src="assets/img/coringa.jpg" alt="Coringa">`,
        `<img src="assets/img/cruela-devil.jpg" alt="Cruela Devil">`,
        `<img src="assets/img/voldemort.jpg" alt="Voldemort">`,
        `<img src="assets/img/scar.jpg" alt="Scar">`,
        `<img src="assets/img/loki.jpg" alt="Loki">`,
        `<img src="assets/img/hannibal.jpg" alt="Hannibal">`,
        `<img src="assets/img/raposo-dora-aventureira.jpg" alt="Raposo">`,
        `<img src="assets/img/darth-vader.jpg" alt="Darth Vader">`,
        `<img src="assets/img/dick-vigarista.jpg" alt="Dick Vigarista">`,
        `<img src="assets/img/jafar.jpg" alt="Jafar">`,
        `<img src="assets/img/thanos.jpg" alt="Thanos">`,
        `<img src="assets/img/presidentes.jpg" alt="Presidentes">`,
    ];

    
    botao.addEventListener('click', function() {
            botao.innerHTML = ("Clique para começar");
            conteudo.style.display = "flex"
            conteudo.innerHTML = " "
            respostas.style.display = "none";
            
            setTimeout(function(){
                conteudo.innerHTML = ("3")
            }, 1000);

            setTimeout(function(){
                conteudo. innerHTML = ("2")
            }, 1500);

            setTimeout(function(){
                conteudo.innerHTML = ("1")
            }, 2000);

            setTimeout(function(){
                conteudo.innerHTML = ("GO!")
            }, 2500);

            setTimeout(function(){
                conteudo.innerHTML = imagens [0]
            }, 3000);

            setTimeout(function(){
                conteudo.innerHTML = imagens [1]
            }, 6000);

            setTimeout(function(){
                conteudo.innerHTML = imagens [2]
            }, 9000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[3]
            }, 12000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[4]
            }, 15000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[5]
            }, 18000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[6]
            }, 21000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[7]
            }, 24000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[8]
            }, 27000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[9]
            }, 30000);
            
            setTimeout(function(){
                conteudo.innerHTML = imagens[10]
            }, 33000);

            setTimeout(function(){
                conteudo.innerHTML = imagens[11]
            }, 36000);

            setTimeout(function(){
                conteudo.style.display = "none";
                respostas.style.display = "flex";
                botao.innerHTML = ("Recomeçar");
            }, 39000);
            
    });
    
});
    