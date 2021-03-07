//creation des div

function creation(){

  const productList = document.getElementById('card_articles');

  var card = document.createElement('span');
    var imgCard = document.createElement('div');
    var idCard = document.createElement('div');
    var catCard = document.createElement('div');
    var colorCard = document.createElement('div');
    var nomCard = document.createElement('div');
    var sizeCard = document.createElement('div');
    var priceCard = document.createElement('div');
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');

      card.className ='card';
      imgCard.className ='img_card';
      idCard.className ='id_card';
      catCard.className ='category_card';
      colorCard.className ='color_card';
      nomCard.className ='nom_card';
      sizeCard.className ='size_card';
      priceCard.className ='price_card';
      editBtn.className ='edit';
      deleteBtn.className ='delete';

    card.appendChild(idCard);
    card.appendChild(imgCard);
    card.appendChild(nomCard);
    card.appendChild(catCard);
    card.appendChild(colorCard);
    card.appendChild(sizeCard);
    card.appendChild(priceCard);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    productList.appendChild(card);

}

function remplissage(i) {
  
}
   
