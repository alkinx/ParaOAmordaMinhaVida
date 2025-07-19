// Modal de imagem
const modal = document.getElementById("modalImagem");
const img = document.getElementById("camisetaImg");
const modalImg = document.getElementById("imgExpandida");
const span = document.getElementsByClassName("fechar")[0];

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
