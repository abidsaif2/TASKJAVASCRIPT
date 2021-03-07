// articles

var articles = [
  {
    "id": 1,
    "category": "jeans",
    "name": "Ripped jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    "size": "XL",
    "color": "blue",
    "price": 20.99
  },
  {
    "id": 2,
    "category": "jeans",
    "name": "Boyfriend jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    "size": "S",
    "color": "blue",
    "price": 24.99
  },
  {
    "id": 3,
    "category": "shirts",
    "name": "Ripped sweatshirt",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    "size": "XL",
    "color": "white",
    "price": 29.99
  },
  {
    "id": 4,
    "category": "jackets",
    "name": "Denim Jacket",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    "size": "M",
    "color": "grey",
    "price": 40.99
  },
  {
    "id": 5,
    "category": "shirts",
    "name": "Longsleeve",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    "size": "L",
    "color": "black",
    "price": 120.99
  },
 {
    "id": 6,
    "category": "jeans",
    "name": "Ripped jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    "size": "XL",
    "color": "blue",
    "price": 20.99
  },
  {
    "id": 7,
    "category": "jeans",
    "name": "Boyfriend jeans",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    "size": "S",
    "color": "blue",
    "price": 24.99
  },
  {
    "id": 8,
    "category": "shirts",
    "name": "Ripped sweatshirt",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    "size": "XL",
    "color": "white",
    "price": 29.99
  },
  {
    "id": 9,
    "category": "jackets",
    "name": "Denim Jacket",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    "size": "M",
    "color": "grey",
    "price": 40.99
  },
  {
    "id": 10,
    "category": "shirts",
    "name": "Longsleeve",
    "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    "size": "L",
    "color": "black",
    "price": 120.99
  }
];

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

      var deleteBtnnode = document.createTextNode('delete');
      var editBtnnode = document.createTextNode('edit');

        editBtn.appendChild(editBtnnode);
        deleteBtn.appendChild(deleteBtnnode);

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

// remplissage des items

function remplissage(i,a,b,c,d,e,f,g) {
  var idCard = document.getElementsByClassName('id_card')[i];
  var imgCard = document.getElementsByClassName('img_card')[i];
  var nomCard = document.getElementsByClassName('nom_card')[i];
  var catCard = document.getElementsByClassName('category_card')[i];
  var colorCard = document.getElementsByClassName('color_card')[i];
  var sizeCard = document.getElementsByClassName('size_card')[i];
  var priceCard = document.getElementsByClassName('price_card')[i];

  var idCardnode = document.createTextNode(a);

  var imgPlace = document.createElement('img');
    imgPlace.setAttribute('src',b);

  var nomCardnode = document.createTextNode(c);
  var catCardnode = document.createTextNode(d);
  var colorCardnode = document.createTextNode(e);
  var sizeCardnode = document.createTextNode(f);
  var priceCardnode = document.createTextNode(g);

  idCard.appendChild(idCardnode);
  imgCard.appendChild(imgPlace);
  nomCard.appendChild(nomCardnode);
  catCard.appendChild(catCardnode);
  colorCard.appendChild(colorCardnode);
  sizeCard.appendChild(sizeCardnode);
  priceCard.appendChild(priceCardnode);
}
   
// les boucles de remplissage

for (i=0 ; i<articles.length ; i++){
  creation();
  remplissage(i,articles[i].id,articles[i].image,articles[i].name,articles[i].category,articles[i].color,articles[i].size,articles[i].price);
  deleteItems(i)
}

// function delete

function deleteItems(i) {
  var deleteItem = document.getElementsByClassName("delete")[i];
  deleteItem.addEventListener('click', function (event) {
      var item = event.target.parentNode;
      item.remove();
  });
}

// function ajouter des items

function addItems() {
    var itemId = document.forms["myForm"]["fid"].value;
    var itemCategory = document.forms["myForm"]["fcategory"].value;
    var itemName = document.forms["myForm"]["fname"].value;
    var itemImg = document.forms["myForm"]["fimg"].value;
    var itemColor = document.forms["myForm"]["fcolor"].value;
    var itemSize = document.forms["myForm"]["fsize"].value;
    var itemPrice = document.forms["myForm"]["fprice"].value;

      var k = articles.length++;

    creation();
    remplissage(i, itemId, itemImg , itemName , itemCategory , itemColor, itemSize, itemPrice);
    deleteItems(k);
}