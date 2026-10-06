const botoes = document.querySelectorAll(".som-card button");
const floresta = new Audio("floresta.mp3");
botoes[0].addEventListener("click", function() {
floresta.play();
});
const mar = new Audio("mar.mp3");
botoes[1].addEventListener("click", function() {
mar.play();
});
const noite = new Audio("noite.mp3");
botoes[2].addEventListener("click", function() {
noite.play();
});