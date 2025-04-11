let nouvelleDiv = document.createElement("div");
nouvelleDiv.className = "ma-div"; 
document.getElementById("conteneur").appendChild(nouvelleDiv);

let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe";
nouvelleDiv.appendChild(paragraphe);

paragraphe.textContent = "Le texte a été modifié";

paragraphe.style.backgroundColor = "lightblue";
nouvelleDiv.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";

nouvelleDiv.addEventListener("click", function () {
    paragraphe.textContent = "Un clic a été détecté";
});
