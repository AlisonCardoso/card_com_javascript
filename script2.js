document.querySelector('button').addEventListener('click', adicionar);

function adicionar(event){
    event.preventDefault();

    let form = document.querySelector('form');
    let card = document.createElement('div');
    let nome = document.createElement('h3');  
    let titulo = document.createElement('p');
   

    
    titulo.textContent = form.titulo.value;
    nome.textContent =  form.nome.value;
  
    card.appendChild(titulo);
    card.appendChild(nome);
    

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    card.appendChild(deleteButton);

 deleteButton.addEventListener("click",function(){
    card.remove();
 });
 
    card.classList.add('card');

    document.querySelector("#dados").appendChild(card);
    form.reset();
}

