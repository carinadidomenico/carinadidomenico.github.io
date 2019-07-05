var casas = [
    `<img src="https://d26lpennugtm8s.cloudfront.net/stores/860/808/products/nicepng_hogwarts-crest-png_43986131-9937be2021d9ed3f4d15499287135301-1024-1024.png" alt="Corvinal">`,
    `<img src="https://i.pinimg.com/originals/e0/e2/bc/e0e2bca469b63385d89ec2f1250e4ca5.png" alt="Lufa Lufa">`,
    `<img src="https://http2.mlstatic.com/grifinoria-harry-potter-tatuagem-temporaria-D_NQ_NP_21895-MLB20218563989_122014-F.jpg" alt="Grifinória">`,
    `<img src="https://i.pinimg.com/originals/71/60/44/716044586b9ea4450d092820fa8db1e4.png" alt="Sonserina">`,
];

var casaNomes = ['Corvinal', 'Lufa Lufa', 'Grifinória', 'Sonserina'];

function escolherCasa() {
    var random = Math.floor (Math.random()*4);
    document.getElementById ('casas').innerHTML = casas[random];
    document.getElementById ('paragrafo').innerHTML = casaNomes[random];
    document.getElementById('seletor').remove();
}