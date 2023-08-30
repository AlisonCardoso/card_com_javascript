let cardList = document.querySelectorAll(".all-card");
for( var i= 0; i < cardList.length; i++){
    initAllCards(cardList[i]);
}

function initAllCards(card){
    var addButton = document.createElement("button");
    addButton.textContent = "adicionar";
    addButton.type = "button";

   card.appendChild(addButton);
   var firstCard = card.querySelector("input");

   addButton.addEventListener("click", function() {
    var div = document.createElement("div");
    var newElement = document.createElement("input");
    newElement.name = firstCard.name;
    newElement.type = firstCard.type;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    div.appendChild(newElement);
    div.appendChild(deleteButton);

 deleteButton.addEventListener("click",function(){
    div.remove();
 });

    card.insertBefore(div, addButton);
});
}