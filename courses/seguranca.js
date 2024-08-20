var score = 0;
var score1 = 0;

document.getElementById("video-1").onclick = function () {
  if (score === 0) {
    document.getElementById("intro").style.display = "none";
    document.getElementById("intro-text").style.color = "grey";
    document.getElementById("page-1").style.display = "flex";
    score++;
  }
};

document.getElementById("page-2-click").onclick = function () {
  if (score1 === 0) {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("video-1").style.color = "grey";
    document.getElementById("page-2").style.display = "flex";
    score1++;
  }
};

document.getElementById("continuar-1").onclick = function () {
  if (score1 === 0) {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("video-1").style.color = "grey";
    document.getElementById("page-2").style.display = "flex";
    score1++;
  }
};

document.getElementById("continuar-2").onclick = function () {
  if (document.getElementById("correct").checked) {
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-2-click").style.color = "grey";
    document.getElementById("coclusao-click").style.color = "grey";
    document.getElementById("page-3").style.display = "flex";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Resposta errada tente outra vez!",
    });
  }
};
