function esconder() {
    var elementos = document.getElementById("elementos");
    elementos.style.display = "none";
    var audio = document.getElementById("audio-element");
    audio.play();
    var fundo = document.getElementById("fundo");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"
    document.body.style.backgroundSize = "cover"
}