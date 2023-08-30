let cardList = document.querySelectorAll(".all-card");
for( var i= 0; i < cardList.length; i++){
    initAllCards(cardList[i]);
}

function initAllCards(card){
    var addButton = document.createElement("button");
    addButton.textContent = "adicionar";
    addButton.type = "button";

   card.appendChild(addButton);
   var firstCard = card.querySelector("textarea");

   addButton.addEventListener("click", function() {
    var div = document.createElement("div");
    var textArea = document.createElement("textarea");
    var newElement = document.createElement("input");
    textArea.name = firstCard.name;
    textArea.type = firstCard.type;

    const recado = document.querySelector("#recado");
    recado.textContent = div.recado.value;
    
    card.appendChild(recado);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

  //  div.appendChild(newElement);
    div.appendChild(deleteButton);
    div.appendChild(textArea);

 deleteButton.addEventListener("click",function(){
    div.remove();
 });

    card.insertBefore(div, addButton);
});
}